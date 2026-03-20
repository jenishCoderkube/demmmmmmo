import React from "react";
import MarketInsightsContent from "@/components/MarketInsights/MarketInsightsContent";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { blogService } from "@/app/services/blogService";

export const metadata = {
  title: "Market Insights | Guided Solution",
  description:
    "Join a global community of innovators. Get curated market insights, regulatory updates, and the latest clinical breakthroughs.",
  openGraph: {
    title: "Market Insights | Guided Solution",
    description:
      "Join a global community of innovators. Get curated market insights, regulatory updates, and the latest clinical breakthroughs.",
  },
};

export default async function MarketInsightsPage() {
  const queryClient = new QueryClient();

  // 1. Prefetch "Top Picks" for the slider
  await queryClient.prefetchQuery({
    queryKey: ["market-insights", "", "press-releases", 1],
    queryFn: () =>
      blogService.getInsights({
        page_type: "MARKET_INSIGHT",
        category: "press-releases",
        page: 1,
      }),
  });

  // 2. Prefetch "Latest MedTech News" for the grid (first page)
  await queryClient.prefetchQuery({
    queryKey: ["market-insights", "", "news", 1],
    queryFn: () =>
      blogService.getInsights({
        page_type: "MARKET_INSIGHT",
        category: "news",
        page: 1,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MarketInsightsContent />
    </HydrationBoundary>
  );
}

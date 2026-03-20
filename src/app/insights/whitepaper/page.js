import React from "react";
import WhitepaperContent from "@/components/Whitepaper/WhitepaperContent";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { blogService } from "@/app/services/blogService";

export const metadata = {
  title: "Whitepapers | Guided Solution",
  description:
    "Explore our collection of expert whitepapers and reports, offering deep dives into MedTech trends, talent strategies, and industry insights.",
  openGraph: {
    title: "Whitepapers | Guided Solution",
    description:
      "Explore our collection of expert whitepapers and reports, offering deep dives into MedTech trends, talent strategies, and industry insights.",
  },
};

export default async function WhitePaperPage() {
  const queryClient = new QueryClient();

  // Prefetch Whitepapers for the grid (first page)
  await queryClient.prefetchQuery({
    queryKey: ["whitepapers", 1],
    queryFn: () =>
      blogService.getInsights({
        page_type: "WHITEPAPER",
        page: 1,
        limit: 10,
      }),
  });

  return (
    // Hydrate the query data for the client component
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WhitepaperContent />
    </HydrationBoundary>
  );
}

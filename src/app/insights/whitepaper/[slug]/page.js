import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { blogService } from "@/app/services/blogService";
import WhitepaperDetailContent from "@/components/Whitepaper/WhitepaperDetailContent";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const insightData = await blogService.getInsightBySlug(slug);
  const insight = insightData?.success ? insightData.data : null;

  return {
    title: `${insight?.title || "Whitepaper"} | Guided Solution`,
    description: insight?.content?.substring(0, 160).replace(/<[^>]*>?/gm, "") || "Guided Solutions - Executive Search & Strategic Recruiting",
    openGraph: {
      title: `${insight?.title || "Whitepaper"} | Guided Solution`,
      description: insight?.content?.substring(0, 160).replace(/<[^>]*>?/gm, "") || "Guided Solutions - Executive Search & Strategic Recruiting",
    },
  };
}

export default async function WhitePaperItemPage({ params }) {
  const { slug } = await params;
  const queryClient = new QueryClient();

  // 1. Fetch single insight data to get tags
  const insightData = await queryClient.fetchQuery({
    queryKey: ["whitepaper", slug],
    queryFn: () => blogService.getInsightBySlug(slug),
  });

  const insight = insightData?.success ? insightData.data : null;
  const firstTag = insight?.tags?.[0]?.slug || "";

  // 2. Prefetch more whitepapers for the slider
  await queryClient.prefetchQuery({
    queryKey: ["whitepapers", "more", firstTag],
    queryFn: () =>
      blogService.getInsights({
        page_type: "WHITEPAPER",
        search: "",
        limit: 10,
        tag: firstTag,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WhitepaperDetailContent slug={slug} />
    </HydrationBoundary>
  );
}

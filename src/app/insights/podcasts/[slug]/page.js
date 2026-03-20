import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { blogService } from "@/app/services/blogService";
import PodcastDetailContent from "@/components/Podcast/PodcastDetailContent";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const insightData = await blogService.getInsightBySlug(slug);
  const insight = insightData?.success ? insightData.data : null;

  return {
    title: `${insight?.title || "Podcast"} | Guided Solution`,
    description:
      insight?.content?.substring(0, 160).replace(/<[^>]*>?/gm, "") ||
      "Guided Solutions - Executive Search & Strategic Recruiting",
    openGraph: {
      title: `${insight?.title || "Podcast"} | Guided Solution`,
      description:
        insight?.content?.substring(0, 160).replace(/<[^>]*>?/gm, "") ||
        "Guided Solutions - Executive Search & Strategic Recruiting",
    },
  };
}

export default async function PodcastItemPage({ params }) {
  const { slug } = await params;
  const queryClient = new QueryClient();

  // 1. Fetch single insight data on the server
  const insightData = await queryClient.fetchQuery({
    queryKey: ["podcast", slug],
    queryFn: () => blogService.getInsightBySlug(slug),
  });

  const insight = insightData?.success ? insightData.data : null;
  const firstTag = insight?.tags?.[0]?.slug || "";

  // 2. Prefetch more podcasts for the slider
  await queryClient.prefetchQuery({
    queryKey: ["podcasts", "more", firstTag],
    queryFn: () =>
      blogService.getInsights({
        page_type: "PODCAST",
        search: "",
        limit: 10,
        tag: firstTag,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PodcastDetailContent slug={slug} />
    </HydrationBoundary>
  );
}

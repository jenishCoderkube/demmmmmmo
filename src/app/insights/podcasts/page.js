import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { blogService } from "@/app/services/blogService";
import PodcastContent from "@/components/Podcast/PodcastContent";

export const metadata = {
  title: "The GS MedTech Podcast | Guided Solution",
  description: "Impact doesn't stop at the C-suite - we find talent from Associate to Director who drives real change.",
};

export default async function PodCastPage() {
  const queryClient = new QueryClient();

  // Prefetch podcasts on the server
  await queryClient.prefetchQuery({
    queryKey: ["podcasts", 1],
    queryFn: () =>
      blogService.getInsights({
        page_type: "PODCAST",
        page: 1,
        limit: 10,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PodcastContent />
    </HydrationBoundary>
  );
}











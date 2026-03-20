import React from "react";
import BlogContent from "@/components/Blog/BlogContent";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { blogService } from "@/app/services/blogService";

export const metadata = {
  title: "Blog & Insights | Guided Solution",
  description:
    "Our comprehensive reports and guides provide deep insights into MedTech leadership, talent acquisition, investment trends, and market dynamics shaping the industry landscape.",
  openGraph: {
    title: "Blog & Insights | Guided Solution",
    description:
      "Our comprehensive reports and guides provide deep insights into MedTech leadership, talent acquisition, investment trends, and market dynamics shaping the industry landscape.",
  },
};

export default async function BlogPage() {
  const queryClient = new QueryClient();

  // Prefetch Press Releases for the slider
  await queryClient.prefetchQuery({
    queryKey: ["blogs", "", "press-releases"],
    queryFn: () =>
      blogService.getInsights({
        page_type: "BLOG",
        category: "press-releases",
      }),
  });

  // Prefetch Blog Articles for the grid (first page)
  await queryClient.prefetchQuery({
    queryKey: ["blogs", "", "blog-article", 1],
    queryFn: () =>
      blogService.getInsights({
        page_type: "BLOG",
        category: "blog-article",
        page: 1,
      }),
  });

  return (
    // Hydrate the query data for the client component
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BlogContent />
    </HydrationBoundary>
  );
}

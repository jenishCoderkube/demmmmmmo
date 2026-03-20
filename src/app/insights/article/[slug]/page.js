import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { blogService } from "@/app/services/blogService";
import ArticleDetailContent from "@/components/Article/ArticleDetailContent";

export const metadata = {
  title: "Article | Guided Solution",
  description: "Guided Solutions - Executive Search & Strategic Recruiting",
  openGraph: {
    title: "Article | Guided Solution",
    description: "Guided Solutions - Executive Search & Strategic Recruiting",
  },
};

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const queryClient = new QueryClient();

  // 1. Fetch single insight data to get tags
  const insightData = await queryClient.fetchQuery({
    queryKey: ["insight", slug],
    queryFn: () => blogService.getInsightBySlug(slug),
  });

  const insight = insightData?.success ? insightData.data : null;
  const firstTag = insight?.tags?.[0]?.slug || "";

  // 2. Prefetch related press releases based on the first tag
  if (firstTag) {
    console.log("firstTag", firstTag);

    await queryClient.prefetchQuery({
      queryKey: ["blogs", firstTag, "press-releases"],
      queryFn: () =>
        blogService.getInsights({
          page_type: "BLOG",
          category: "press-releases",
          tag: firstTag,
        }),
    });
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ArticleDetailContent slug={slug} />
    </HydrationBoundary>
  );
}

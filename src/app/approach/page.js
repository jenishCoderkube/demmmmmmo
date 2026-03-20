import React from "react";
import ApproachContent from "@/components/Approach/ApproachContent";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { serviceService } from "@/app/services/serviceService";

export async function generateMetadata() {
  const approachData = await serviceService.getApproaches();
  const hero = approachData?.data?.hero || {};

  const cleanTitle = hero.title
    ? hero.title.replace(/<\/?[^>]+(>|$)/g, "")
    : "";

  return {
    title: cleanTitle ? `${cleanTitle} | Guided Solutions` : "Guided Solutions",
    description: hero.description || "",
  };
}

export default async function ApproachPage() {
  const queryClient = new QueryClient();

  // Prefetch approach data
  await queryClient.prefetchQuery({
    queryKey: ["approaches"],
    queryFn: () => serviceService.getApproaches(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ApproachContent />
    </HydrationBoundary>
  );
}

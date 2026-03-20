import React from "react";
import AboutContent from "@/components/About/AboutContent";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { serviceService } from "@/app/services/serviceService";

export async function generateMetadata() {
  const aboutData = await serviceService.getAboutData();
  const ceoLetter = aboutData?.data?.ceo_letter || {};
  
  const cleanTitle = ceoLetter.title
    ? ceoLetter.title
        .replace(/&nbsp;/g, " ")
        .replace(/<\/?[^>]+(>|$)/g, " ")
        .replace(/\s+/g, " ")
        .trim()
    : "About Us";

  const description = aboutData?.data?.core_values?.description || "";

  return {
    title: `${cleanTitle} | Guided Solutions`,
    description: description,
    openGraph: {
      title: `${cleanTitle} | Guided Solutions`,
      description: description,
      url: "/about",
      siteName: "Guided Solutions",
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${cleanTitle} | Guided Solutions`,
      description: description,
    },
  };
}

export default async function AboutPage() {
  const queryClient = new QueryClient();

  // Prefetch about data
  await queryClient.prefetchQuery({
    queryKey: ["aboutData"],
    queryFn: () => serviceService.getAboutData(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AboutContent />
    </HydrationBoundary>
  );
}

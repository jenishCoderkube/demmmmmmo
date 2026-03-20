import React from "react";
import HomeContent from "@/components/Home/HomeContent";
import { serviceService } from "@/app/services/serviceService";

export const revalidate = 60;

export async function generateMetadata() {
  const homeData = await serviceService.getHomeData();
  const hero = homeData?.data?.hero || {};

  const cleanTitle = hero.title
    ? hero.title
        .replace(/&nbsp;/g, " ")
        .replace(/<\/?[^>]+(>|$)/g, " ")
        .replace(/\s+/g, " ")
        .trim()
    : "Guided Solutions";

  const description =
    hero.description ||
    "Guided Solutions - 210+ years of collective MedTech experience dedicated to your success.";

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL), // ✅ IMPORTANT

    title: `${cleanTitle} | Guided Solutions`,
    description: description,

    alternates: {
      canonical: "/", // now becomes absolute automatically
    },

    openGraph: {
      title: `${cleanTitle} | Guided Solutions`,
      description: description,
      url: "/", // also becomes absolute
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
export default async function Home() {
  // Fetch data directly on the server for maximum performance and ISR
  // These calls are deduplicated via React cache() in fetchHandler
  const [homeData, teamSectionData] = await Promise.all([
    serviceService.getHomeData(),
    serviceService.getTeamSectionData(),
  ]);

  return <HomeContent homeData={homeData} teamSectionData={teamSectionData} />;
}

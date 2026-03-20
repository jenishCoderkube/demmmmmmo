import ServiceSlugContent from "@/components/Services/ServiceSlugContent";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { serviceService } from "@/app/services/serviceService";

const SLUG = "individual-assignments";
const PAGE_TYPE = "INDIVIDUAL_ASSIGNMENTS";

export async function generateMetadata() {
  const serviceData = await serviceService.getServices({ page_type: PAGE_TYPE });
  const service = serviceData?.data?.services?.[0];

  return {
    title: `${service?.title || "Individual Assignments"} | Guided Solutions`,
    description:
      service?.description || "Expert search for MedTech leadership.",
  };
}

export default async function IndividualAssignmentsPage() {
  const queryClient = new QueryClient();

  // Prefetch service data using page_type
  await queryClient.prefetchQuery({
    queryKey: ["services", PAGE_TYPE],
    queryFn: () => serviceService.getServices({ page_type: PAGE_TYPE }),
  });

  // Prefetch FAQs
  await queryClient.prefetchQuery({
    queryKey: ["faqs"],
    queryFn: () => serviceService.getFaqs(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ServiceSlugContent slug={SLUG} pageType={PAGE_TYPE} />
    </HydrationBoundary>
  );
}

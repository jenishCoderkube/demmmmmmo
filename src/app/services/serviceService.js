import { handleRequest } from "./authService";
import { fetchHandler } from "@/app/utils/fetchHandler";

const SERVICE_ENDPOINTS = {
  SERVICES: "/services",
  FAQS: "/faqs",
  APPROACHES: "/approaches",
  HOME: "/home",
  TEAM_SECTION: "/team-section",
  ABOUT: "/about",
};

export const PAGE_TYPE_MAP = {
  "individual-assignments": "INDIVIDUAL_ASSIGNMENTS",
  "team-build": "TEAM_BUILD",
  "strategic-recruiting": "STRATEGIC_RECRUITING",
  "organizational-design": "ORGANIZATIONAL_DESIGN",
  "board-advisory": "BOARD_ADVISORY",
  "executive-search": "EXECUTIVE_SEARCH",
};

export const serviceService = {
  /**
   * Fetch services with optional filters
   * @param {Object} params - Query parameters (page_type, slug)
   */
  getServices: (params = {}) => {
    return handleRequest("get", SERVICE_ENDPOINTS.SERVICES, params);
  },

  /**
   * Fetch single service by slug
   * @param {string} slug - The slug of the service
   */
  getServiceBySlug: (slug) => {
    return handleRequest("get", SERVICE_ENDPOINTS.SERVICES, { slug });
  },

  /**
   * Fetch faqs
   */
  getFaqs: () => {
    return handleRequest("get", SERVICE_ENDPOINTS.FAQS);
  },

  /**
   * Fetch approaches
   */
  getApproaches: () => {
    return handleRequest("get", SERVICE_ENDPOINTS.APPROACHES);
  },

  /**
   * Fetch home data
   */
  getHomeData: () => {
    return fetchHandler(SERVICE_ENDPOINTS.HOME);
  },

  /**
   * Fetch team section data
   */
  getTeamSectionData: () => {
    return fetchHandler(SERVICE_ENDPOINTS.TEAM_SECTION);
  },

  /**
   * Fetch about data
   */
  getAboutData: () => {
    return handleRequest("get", SERVICE_ENDPOINTS.ABOUT);
  },
};

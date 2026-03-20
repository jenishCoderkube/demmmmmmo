import api, { handleRequest } from "./authService";

const BLOG_ENDPOINTS = {
  INSIGHTS: "/insights",
};

export const blogService = {
  /**
   * Fetch insights/blogs with optional filters
   * @param {Object} params - Query parameters (page_type, search, category, page, limit)
   */
  getInsights: (params = {}) => {
    // Ensure page_type is BLOG by default for this service method if not provided
    const payload = {
      page_type: "BLOG",
      ...params,
    };
    return handleRequest("get", BLOG_ENDPOINTS.INSIGHTS, payload);
  },

  /**
   * Fetch single insight by slug
   * @param {string} slug - The slug of the insight/blog
   */
  getInsightBySlug: (slug) => {
    return handleRequest("get", `${BLOG_ENDPOINTS.INSIGHTS}/${slug}`);
  },
};

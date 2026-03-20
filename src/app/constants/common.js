export const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const axiosTimeout = 10000;

export const getToken = () => {
  if (typeof window === "undefined") return null;
  return (
    localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken")
  );
};

export const setToken = (token, remember = true) => {
  const storage = remember ? localStorage : sessionStorage;
  storage.setItem("accessToken", token);
};

export const clearToken = () => {
  localStorage.removeItem("accessToken");
  sessionStorage.removeItem("accessToken");
};

export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const formatMessageTime = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;

  const isToday = date.toDateString() === now.toDateString();
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const isYesterday = date.toDateString() === yesterday.toDateString();

  const timeStr = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  if (isToday) {
    if (diffHours < 6) return `${diffHours}h ago`;
    return timeStr;
  }

  if (isYesterday) {
    return `Yesterday, ${timeStr}`;
  }

  if (diffDays < 7) {
    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
    return `${dayName}, ${timeStr}`;
  }

  if (date.getFullYear() === now.getFullYear()) {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export const formatNumber = (num) => {
  return new Intl.NumberFormat("en-GB", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2,
  }).format(num);
};

// Role configuration - customize per project
export const ROLE_CONFIG = {
  // Example:
  // ADMIN: {
  //   homePath: "/admin/dashboard",
  //   activationPath: "/admin/activation",
  //   requiresKyc: false,
  //   requiresSubscription: false,
  // },
  // USER: {
  //   homePath: "/user/dashboard",
  //   activationPath: "/user/activation",
  //   requiresKyc: false,
  //   requiresSubscription: false,
  // },
};











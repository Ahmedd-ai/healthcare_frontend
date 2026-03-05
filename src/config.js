// API Configuration
// Uses environment variable in production, defaults to localhost for development

// Get API URL from environment variable (Vercel) or use localhost for development
export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8001";

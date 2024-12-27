import axios, { InternalAxiosRequestConfig } from 'axios';

const apiService = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000,
  headers: { 'accept': 'application/json' },
});

// Add a request interceptor to modify or add headers before each API call
apiService.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // Example: Add an Authorization header if needed
  // if (import.meta.env.VITE_BASE_URL) config.headers = { ...config.headers, Authorization: `Bearer {token goes here}` }
  return config;
}, (err) => Promise.reject(err)
);

// Add a response interceptor to handle API responses
apiService.interceptors.response.use(
  // Return the response as-is if the call is successful
  (res) => { return res },
  async (err) => {
    return Promise.reject(err);
    // try {
    // If the API responds with an authorization error (e.g., 401/403),
    // you can implement logic to refresh the token here and retry the API call.
    // Example:
    // - Fetch a new access token using a refresh token
    // - Update headers with the new token
    // - Retry the failed API request
    // } catch (error) {
    // If the token refresh or retry logic fails, propagate the error
    // return Promise.reject(error);
    // }
  }
);

export { apiService };
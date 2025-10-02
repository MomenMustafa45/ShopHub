import axios, {
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

// we can get it from .env file
const API_BASE_URL = "https://fakestoreapi.com";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // globally handle request transformations
    // we can add here authorization headers or custom headers
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // we can handle here global response transformations
    return response;
  },
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

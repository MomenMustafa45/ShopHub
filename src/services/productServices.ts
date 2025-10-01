import type { Product } from "../types/product";
import { apiClient } from "./api/client";
import { ENDPOINTS } from "./api/endpoints";

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await apiClient.get<Product[]>(ENDPOINTS.PRODUCTS);
  return response.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await apiClient.get<Product>(ENDPOINTS.PRODUCT(id));
  return response.data;
};

import { useQuery } from "@tanstack/react-query";
import type { Product } from "../../types/product";
import { getAllProducts, getProductById } from "../../services/productServices";

export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
};

export const useProduct = (id: number) => {
  return useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });
};

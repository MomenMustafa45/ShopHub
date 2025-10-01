import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";
import AppLoadingSpinner from "../AppLoadingSpinner/AppLoadingSpinner";
import type { Product } from "../../types/product";

type ProductListProps = {
  productListTitle?: string;
  productListSubTitle?: string;
  isLoading?: boolean;
  error?: Error | null;
  onProductPressHandler: (productId: number) => void;
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({
  products,
  productListSubTitle,
  productListTitle,
  isLoading = false,
  error,
  onProductPressHandler,
}) => {
  return (
    <section className="section">
      <div className="container">
        <div className="page-header">
          <h2 className="page-title">{productListTitle}</h2>
          <p className="page-subtitle">{productListSubTitle}</p>
        </div>

        {isLoading && <AppLoadingSpinner size="lg" />}
        {error && (
          <div className={styles.error}>
            <p>Failed to load products. Please try again later.</p>
          </div>
        )}

        {!isLoading && !error && (
          <div
            className={styles.productList}
            style={
              {
                "--mobile-columns": 1,
                "--tablet-columns": 2,
                "--desktop-columns": 3,
              } as React.CSSProperties
            }
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onProductPressHandler}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;

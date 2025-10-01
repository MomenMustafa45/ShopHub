import React from "react";
import styles from "./ProductDetailsSection.module.css";
import type { Product } from "../../../../types/product";
type ProductDetailsSectionProps = {
  product: Product;
};
const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({
  product,
}) => {
  return (
    <section className={styles.detailsSection}>
      <div className="container">
        <div className={styles.tabs}>
          <div className={styles.tabContent}>
            <h3>Product Details</h3>
            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <strong>Category:</strong>
                <span>{product.category}</span>
              </div>
              <div className={styles.detailItem}>
                <strong>Rating:</strong>
                <span>
                  {product.rating.rate} / 5 ({product.rating.count} reviews)
                </span>
              </div>
              <div className={styles.detailItem}>
                <strong>SKU:</strong>
                <span>PROD-{product.id.toString().padStart(4, "0")}</span>
              </div>
              <div className={styles.detailItem}>
                <strong>In Stock:</strong>
                <span className={styles.inStock}>Yes ✅</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSection;

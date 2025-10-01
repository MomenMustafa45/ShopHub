import React from "react";
import styles from "./ProductCard.module.css";
import type { Product } from "../../types/product";
import AppButton from "../AppButton/AppButton";

type ProductCardProps = {
  product: Product;
  onViewDetails: (productId: number) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.category}>{product.category}</p>
        <div className={styles.rating}>
          ⭐ {product.rating.rate} ({product.rating.count})
        </div>
        <div className={styles.footer}>
          <span className={styles.price}>${product.price}</span>
          <AppButton
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(product.id)}
          >
            View Details
          </AppButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

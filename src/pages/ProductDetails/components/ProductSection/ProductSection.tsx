import React, { useCallback, useState } from "react";
import styles from "./ProductSection.module.css";
import type { Product } from "../../../../types/product";
import AppButton from "../../../../components/AppButton/AppButton";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../../../utils/formatPrice";
import { rateStars } from "../../../../utils/rateStars";

type ProductSectionProps = {
  product: Product;
};

const ProductSection: React.FC<ProductSectionProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const continueShoppingHandler = useCallback(
    () => navigate("/products"),
    [navigate]
  );

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const rateStarsResult = rateStars(product.rating.rate);

  // simulating that product comes with different images
  const productImages = [product.image, product.image, product.image];

  return (
    <section className={styles.productSection}>
      <div className="container">
        <div className={styles.productGrid}>
          {/* Product Images */}
          <div className={styles.imageSection}>
            <div className={styles.mainImage}>
              <img
                src={productImages[selectedImage]}
                alt={product.title}
                className={styles.productImage}
              />
              {product.rating.rate > 4.5 && (
                <div className={styles.featuredBadge}>Popular 🔥</div>
              )}
            </div>

            <div className={styles.imageThumbnails}>
              {productImages.map((image, index) => (
                <button
                  key={index}
                  className={`${styles.thumbnail} ${
                    selectedImage === index ? styles.thumbnailActive : ""
                  }`}
                  onClick={() => handleImageClick(index)}
                >
                  <img src={image} alt={`${product.title} view ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className={styles.infoSection}>
            <div className={styles.productHeader}>
              <span className={styles.category}>{product.category}</span>
              <h1 className={styles.productTitle}>{product.title}</h1>

              <div className={styles.ratingSection}>
                <div className={styles.rating}>
                  <div className={styles.stars}>{rateStarsResult}</div>
                  <span className={styles.ratingText}>
                    {product.rating.rate} ({product.rating.count} reviews)
                  </span>
                </div>
              </div>

              <div className={styles.priceSection}>
                <span className={styles.price}>
                  {formatPrice(product.price)}
                </span>
                {product.price > 100 && (
                  <span className={styles.shippingBadge}>🚚 Free Shipping</span>
                )}
              </div>
            </div>

            <div className={styles.productDescription}>
              <p>{product.description}</p>
            </div>

            {/* Purchase Options */}
            <div className={styles.purchaseSection}>
              <div className={styles.quantitySelector}>
                <label htmlFor="quantity" className={styles.quantityLabel}>
                  Quantity:
                </label>
                <div className={styles.quantityControls}>
                  <button
                    type="button"
                    className={styles.quantityButton}
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    −
                  </button>
                  <span className={styles.quantityDisplay}>{quantity}</span>
                  <button
                    type="button"
                    className={styles.quantityButton}
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= 10}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className={styles.totalPrice}>
                <span>Total: </span>
                <strong>{formatPrice(product.price * quantity)}</strong>
              </div>

              <div className={styles.actionButtons}>
                <AppButton
                  variant="primary"
                  size="lg"
                  className={styles.addToCartBtn}
                >
                  🛒 Add to Cart
                </AppButton>

                <AppButton
                  variant="outline"
                  size="lg"
                  onClick={continueShoppingHandler}
                >
                  Continue Shopping
                </AppButton>
              </div>
            </div>

            {/* Product Features */}
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🚚</span>
                <div>
                  <strong>Free Shipping</strong>
                  <p>On orders over $100</p>
                </div>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>↩️</span>
                <div>
                  <strong>30-Day Returns</strong>
                  <p>No questions asked</p>
                </div>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🔒</span>
                <div>
                  <strong>Secure Payment</strong>
                  <p>Your data is protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

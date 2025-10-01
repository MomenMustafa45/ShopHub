import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { useProduct } from "../../hooks/apiHooks/useProducts";
import AppLoadingSpinner from "../../components/AppLoadingSpinner/AppLoadingSpinner";
import AppButton from "../../components/AppButton/AppButton";
import AppBreadcrumb from "../../components/AppBreadcrumb/AppBreadcrumb";
import { breadcrumbLinks } from "./utils/breadcrumbLinks";
import ProductSection from "./components/ProductSection/ProductSection";
import ProductDetailsSection from "./components/PeductDetailsSection/ProductDetailsSection";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const productId = parseInt(id || "0");

  const { data: product, isLoading, error } = useProduct(productId);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <AppLoadingSpinner size="lg" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorIcon}>😕</div>
        <h2>Product Not Found</h2>
        <p>Sorry, we couldn't find the product you're looking for.</p>
        <div className={styles.errorActions}>
          <AppButton onClick={() => navigate(-1)} variant="outline">
            ← Go Back
          </AppButton>
          <AppButton onClick={() => navigate("/products")} variant="primary">
            Browse Products
          </AppButton>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.productDetailsPage}>
      {/* Breadcrumb Navigation */}
      <AppBreadcrumb
        breadcrumbLinks={breadcrumbLinks}
        breadcrumbCurrent={product.title}
      />

      {/* Main Product Section */}
      <ProductSection product={product} />

      {/* Product Details Tabs */}
      <ProductDetailsSection product={product} />
    </div>
  );
};

export default ProductDetails;

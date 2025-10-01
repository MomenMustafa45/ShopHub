import React, { useCallback } from "react";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import { useProducts } from "../../hooks/apiHooks/useProducts";
import { useNavigate } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { data: products, isLoading, error } = useProducts();

  const featuredProducts = products?.slice(0, 6) || [];

  const onProductPressHandler = useCallback(
    (productId: number) => {
      navigate(`/product/${productId}`);
    },
    [navigate]
  );

  return (
    <>
      {/* hero */}
      <HeroBanner
        title="Welcome to ShopHub"
        subtitle="Discover amazing products at great prices"
        ctaText="Shop Now"
      />

      {/* products */}
      <ProductList
        onProductPressHandler={onProductPressHandler}
        products={featuredProducts}
        error={error}
        isLoading={isLoading}
        productListSubTitle="Featured Products"
        productListTitle="Check out our handpicked selection of premium products"
      />
    </>
  );
};

export default Home;

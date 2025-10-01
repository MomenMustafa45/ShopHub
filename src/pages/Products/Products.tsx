import { useCallback } from "react";
import styles from "./Products.module.css";
import ProductList from "../../components/ProductList/ProductList";
import { useProducts } from "../../hooks/apiHooks/useProducts";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useProducts();

  const onProductPressHandler = useCallback(
    (productId: number) => {
      navigate(`/product/${productId}`);
    },
    [navigate]
  );

  return (
    <div className={styles.productsPage}>
      <ProductList
        onProductPressHandler={onProductPressHandler}
        products={data || []}
        error={error}
        isLoading={isLoading}
        productListSubTitle="Featured Products"
        productListTitle="Check out our handpicked selection of premium products"
      />
    </div>
  );
};

export default Products;

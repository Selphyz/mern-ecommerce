import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Product } from "src/components";
import axios from "axios";
import { ProductType } from "src/data/products";
// interface HomePageProps {}
export const HomePage: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>();
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <React.Fragment>
      <h1>Latest Products</h1>
      <Row>
        {products &&
          products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
    </React.Fragment>
  );
};
export default HomePage;

import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Loader, Product, Message } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, selectProducts } from '../../src/store/reducers/productsReducer';
// interface HomePageProps {}
// type HomeProps = ProductInterface & {
//   loading?: boolean;
//   error?: any;
// };
export const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const productList = useSelector(selectProducts);
  const { products, error, loading } = productList;
  useEffect(() => {
    dispatch(getProducts('http://localhost:5000/api/products'));
  }, [dispatch]);
  return (
    <React.Fragment>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' error={error}></Message>
      ) : (
        <Row>
          {products!.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product key={product._id} product={product} />
            </Col>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
};
export default HomePage;

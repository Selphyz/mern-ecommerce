import React, { useEffect } from 'react';
import { Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap';
import { Link, RouteComponentProps } from 'react-router-dom';
import Rating from '../../src/components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, selectProduct } from '../store/reducers/productDetailsReducer';
import { Loader, Message } from '../components';
type RouteParams = {
  id: string;
};
const ProductPage: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const dispatch = useDispatch();
  const productPayload = useSelector(selectProduct);
  const { error, loading, product } = productPayload;
  console.log(productPayload);
  useEffect(() => {
    dispatch(getProduct(`http://localhost:5000/api/products/${match.params.id}`));
  }, [dispatch, match]);
  return (
    <React.Fragment>
      <Link className='btn btn-light my-3' to='/'>
        Start
      </Link>
      {!!productPayload ? console.log(productPayload) : null}
      {loading && !product ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'></Message>
      ) : (
        <Row>
          <Col md={'6'}>
            <Image src={product!.image} alt={product!.name} fluid />
          </Col>
          <Col md={'3'}>
            <ListGroup>
              <ListGroup.Item>
                <h3>{product!.name}</h3>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup.Item>
              <Rating value={product!.rating} text={`${product!.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product!.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product!.description}</ListGroup.Item>
          </Col>
          <Col>
            <Card>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col>Price</Col>
                    <Col>
                      <strong>${product!.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status</Col>
                    <Col>
                      <strong>
                        ${product!.countInStock && product!.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button className='btn-block' type='button' disabled={product!.countInStock === 0}>
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </React.Fragment>
  );
};
export default ProductPage;

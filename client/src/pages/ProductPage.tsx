import React, { useEffect, useState } from "react";
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import { Link, RouteComponentProps } from "react-router-dom";
import Rating from "src/components/Rating";
import { ProductType } from "src/data/products";
import axios from "axios";
type RouteParams = {
  id: string;
};
const ProductPage: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const [product, setProduct] = useState<ProductType>();
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    };
    fetchProducts();
  }, [match]);
  return (
    <React.Fragment>
      <Link className="btn btn-light my-3" to="/">
        Start
      </Link>
      <Row>
        <Col md={"6"}>
          <Image src={product?.image} alt={product?.name} fluid />
        </Col>
        <Col md={"3"}>
          <ListGroup>
            <ListGroup.Item>
              <h3>{product?.name}</h3>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
            <Rating value={product?.rating} text={`${product?.numReviews} reviews`} />
          </ListGroup.Item>
          <ListGroup.Item>Price: ${product?.price}</ListGroup.Item>
          <ListGroup.Item>Description: {product?.description}</ListGroup.Item>
        </Col>
        <Col>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>
                    <strong>${product?.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                  <Col>
                    <strong>${product && product.countInStock > 0 ? "In Stock" : "Out of Stock"}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="btn-block" type="button" disabled={product?.countInStock === 0}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default ProductPage;

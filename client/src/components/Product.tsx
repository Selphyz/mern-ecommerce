import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductInterface } from 'src/store/types/product.interfaces';
import Rating from './Rating';
interface ProductProps {
  product: ProductInterface;
}
export const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <div className='my-3'>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          </div>
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Product;

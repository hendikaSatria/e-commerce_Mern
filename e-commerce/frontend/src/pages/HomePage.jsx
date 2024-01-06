import React from 'react';
import { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product';
import  axiosInstance  from '../axiosInstance';
// import products from '../products';
const HomePage = () => {
  const [products, setProducts] = useState([]); 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axiosInstance.get('/api/products');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
        <Row>
            {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
            ))}
        </Row>
    </>
  )
}

export default HomePage

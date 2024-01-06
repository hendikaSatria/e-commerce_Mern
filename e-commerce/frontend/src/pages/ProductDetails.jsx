import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Rating from '../components/Rating';
import  axiosInstance  from '../axiosInstance';


const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const {id: productId} = useParams(); 
    console.log('Product ID:', productId);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axiosInstance.get(`/api/products/${productId}`);
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
                setProduct(null);
            }
        };

        fetchProduct();
    }, [productId]);

    return (
        <>
            <Link className='btn btn-dark my-3' to="/"> Back </Link>
            <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={4}>
                    <ListGroup>
                        <ListGroup.Item variant='flush'>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup>
                        <ListGroup.Item variant='flush'>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup>
                        <ListGroup.Item variant='flush'>
                            Description : <p>{product.description}</p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price: </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status: </Col>
                                    <Col>
                                        <strong>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button 
                                    className='btn-block'
                                    type='button'
                                    disabled={product.countInStock === 0}
                                > 
                                Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductDetails

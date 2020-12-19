import React, {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Card,
  Image,
  ListGroup,
  Button,

} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'


const ProductScreen = ({ match }) => {
  const [product , setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get(`/api/products/${match.params.id}`)
      setProduct(data)
    }
    fetchProduct()
  }, [])

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Retour
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} avis`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Prix : {product.price} €</ListGroup.Item>
            <ListGroup.Item>Description : {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              
              <ListGroup.Item>
                <Row>
                  <Col>Prix :</Col>
                  <Col>
                    <strong>{product.price} €</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status :</Col>
                  <Col>
                    <strong>{product.countInStock > 0 ? 'En stock' : 'Plus en Stock'}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button className='btn-block' type='button' disabled = {product.countInStock === 0}>
                  Ajouter au panier
                </Button>
              </ListGroup.Item>

            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen

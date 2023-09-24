import { useState, useEffect } from "react";
import { NavLink} from "react-router-dom";
import {Card, Row, Col, Button} from "react-bootstrap";



const Products = () => {

  const [products, setProducts] = useState([])
  

  useEffect(() => {
    const getData = async() => {
      const request = await fetch("https://fakestoreapi.com/products");
      const response = await request.json();
      console.log(response)
      setProducts(response)
    }
    getData()
  }, [])

  return (
    <div>
      <h1>Productos PauloBella</h1>
      <Row xs={1} md={2} className="g-4">
          {
            products.map(product => (
              <Col key={product.id}>
                <Card style={{with: "60px"}}>
                  <Card.Img variant="top" src={product.image} style={{width: "300px", height: "200px"}} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Button><NavLink to={`/products/${product.id}`} style={{color: "white", textDecoration: "none"}}>Ver Producto</NavLink></Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
      </Row>
    </div>
  )
}

export default Products
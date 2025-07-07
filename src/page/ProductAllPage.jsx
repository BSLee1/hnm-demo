import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

const ProductAllPage = () => {
  const [products, setProducts] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const qString = searchParams.get('q') ? `?q=${searchParams.get('q')}` : ''
  
  const getProducts = async () => {
    // const response = await fetch(`http://localhost:3000/products${qString}`)
    const response = await fetch(`https://my-json-server.typicode.com/BSLee1/hnm-demo/products${qString}`)
    const data = await response.json()
    console.log(data)
    setProducts(data)  
  }

  useEffect(() => {
    getProducts()
  }, [searchParams])

  return (
    <div className='product-container'>
      <Container>
        <Row>
          {products.map((product) => (
            <Col lg={3} key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAllPage
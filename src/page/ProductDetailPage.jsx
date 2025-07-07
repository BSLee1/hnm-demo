import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Form } from 'react-bootstrap'

const ProductDetailPage = () => {
  const { id } = useParams()
  const [productDetailData, setProductDetailData] = useState({})

  const getProductDetail = async() => {
    const url = `http://localhost:3000/products/${id}`
    const response = await fetch(url)
    const data = await response.json()
    setProductDetailData(data)
  }
  
  useEffect(() => {
    getProductDetail()
  }, [])

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={productDetailData.img} alt={productDetailData.title} />
        </Col>
        <Col>
          <div>{productDetailData?.choice && "Conscious choice"}</div>
          <div>{productDetailData.title}</div>
          <div>{productDetailData?.price}</div>
          <Form.Select aria-label="Default select example">
            <option>사이즈를 선택하세요</option>
            {productDetailData.size?.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetailPage
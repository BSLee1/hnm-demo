import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  const showDetail = () => {
    navigate(`/product/${product.id}`)
  }

  return (
    <div className="product-card" onClick={showDetail}>
        <img src={product.img} alt={product.title} />
        <div>{product?.choice && "Conscious choice"}</div>
        <div>{product.title}</div>
        <div>{product.price}</div>
        <div>{product?.new && "신제품"}</div>
    </div>
  )
}

export default ProductCard
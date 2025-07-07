import React from 'react'
import { Navigate } from 'react-router-dom' 
import ProductDetailPage from '../page/ProductDetailPage'

const PrivateRoute = ({ authenticated }) => {
	return authenticated ? <ProductDetailPage /> : <Navigate to="/login" />  
}

export default PrivateRoute
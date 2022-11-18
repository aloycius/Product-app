import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './Components/Products';
import ProductDescription from './Components/ProductDescription';
import App from './App'
import './index.css'


export default function main() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route path="/description" element={<ProductDescription />} ></Route>
    </Routes>
    </BrowserRouter>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

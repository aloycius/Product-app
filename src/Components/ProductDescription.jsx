import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
export default function ProductDescription() {
  const [productDetail, setProductDetail] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}/`)
      .then((response) => response.json()
      .then((result) => setProductDetail(result))
      )
  }, []);
  return (
    <div className="flex flex-row gap-3 justify-center">
      <div className="flex flex-col w-3/6 content-center ml-8">
        <div className="flex flex-row justify-center rounded-full bg-red-500 p-3">
          <img
            className="w-3/6 h-min rounded-lg"
            src={productDetail.image}
          />
        </div>
        <div className="flex flex-row justify-center">
          <p>Price:${productDetail.price}</p>
        </div>
      </div>
      <div className="rounded-md bg-red-500">
        <p>Description</p>
        <p>xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxx</p>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Products() {
  //useState stores data fetched
  const [products, setProducts] = useState([]);
  //fetches data and modifies to json
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setProducts(result));
  }, []);
  console.log(products);
  return (
    <div className="h-screen w-full flex flex-row box-border">
      <div className="flex flex-row justify-center content-center gap-5 font-bold ml-16 mt-8 h-11 bg-red-600">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>Cart</div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row mt-24 content-start font-bold p-4 bg-red-600 h-11 text-lg">
          <h1>Products</h1>
        </div>
        <div className="flex flex-row ">
          {/* <div className="flex flex-row flex-wrap justify-center mt-20"> */}
            <div className="grid grid-rows-5 grid-flow-col gap-4 mt-20">
            {products.map((item) => (
              <div key={item.id} className="flex flex-col">
                <img
                  className="w-3/6 h-min"
                  src={item.image}
                  alt="pink lady"
                />
                <div className="flex flex-col content-start">
                  <Link to="/ProductDescription">
                    <h3>{item.title}</h3>
                  </Link>
                  <p>Price:${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Outlet /> */}
    </div>
  );
}

import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function () {
  return (
    <div className="h-screen w-full flex flex-row box-border">
      <div className="flex flex-row justify-center content-center gap-5 font-bold ml-16 mt-8 h-11 bg-red-600">
        <div><Link to="/">Home</Link> </div>
        <div>Cart</div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row mt-24 content-start font-bold p-4 bg-red-600 h-11 text-lg">
          <h1>Products</h1>
        </div>
        <div className="flex flex-row ">
          <div className="flex flex-row justify-center mt-20 items-start">
            <div className="flex flex-col">
              <img
                className="w-1/4 h-min"
                src=" https://2.bp.blogspot.com/-w3CHOiWEt54/UOf9syEszyI/AAAAAAAAIGg/JmPChqBAPWA/s1600/Cocktail-Dress-Collection.jpg"
                alt="pink lady"
              />
              <div className="flex flex-col content-start">
                <Link to="description"><p>Description</p></Link>
                <p>Price:$12,500</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center mt-20 items-start">
            <div className="flex flex-col">
              <img
                className="w-1/4 h-min"
                src=" https://2.bp.blogspot.com/-w3CHOiWEt54/UOf9syEszyI/AAAAAAAAIGg/JmPChqBAPWA/s1600/Cocktail-Dress-Collection.jpg"
                alt="pink lady"
              />
              <div className="flex flex-col content-start">
                <p>Description</p>
                <p>Price:$12,500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

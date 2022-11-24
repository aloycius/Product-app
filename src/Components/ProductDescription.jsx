import React from "react";
import { Link } from "react-router-dom";
export default function ProductDescription() {
  return (
    <div className="flex flex-row gap-3 justify-center">
      <div className="flex flex-col w-3/6 content-center ml-8">
        <div className="flex flex-row justify-center rounded-full bg-red-500 p-3">
          <img
            className="w-3/6 h-min rounded-lg"
            src="https://2.bp.blogspot.com/-w3CHOiWEt54/UOf9syEszyI/AAAAAAAAIGg/JmPChqBAPWA/s1600/Cocktail-Dress-Collection.jpg"
          />
        </div>
        <div className="flex flex-row justify-center">
          <p>Price:$12,500</p>
        </div>
      </div>
      <div className="rounded-md bg-red-500">
        <p>Description</p>
        <p>xxxxxxxxxxxxxxxxxxxx
          xxxxxxxxxxxxxxxxxxxxx
  
        </p>

      </div>
    </div>
  );
}

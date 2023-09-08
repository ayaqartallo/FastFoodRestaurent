import React from "react";
import "./sales.css";
import tastyThursdaysImage from "../images/burger.jpeg"; 
import piggaDaysImage from "../images/pizza.jpeg"; 

const Sales = () => {
  return (
    <div className="sales-container">
      <div className="sales">
        <div className="sales-image-column">
          <img src={tastyThursdaysImage} alt="Tasty Thursdays" className="sales-image" />
        </div>
        <div className="sales-content">
          <h1>Tasty Thursdays</h1>
          <p>20% off</p>
          <button>Order Now</button>
        </div>
      </div>
      <div className="sales">
        <div className="sales-image-column">
          <img src={piggaDaysImage} alt="Pigga Days" className="sales-image" />
        </div>
        <div className="sales-content">
          <h1>Pigga Days</h1>
          <p>15% off</p>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Sales;

import React, { useContext, useState } from "react";
import "./menu.css";
import Categories from "./categories";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import App from '../App';
export const Menu = () => {
    const [data, setData] = useState(Categories);
    const filterResult = (catItem) => {
        const result = Categories.filter((curData) => {
            return curData.category === catItem;
        });
        setData(result);
    }
    return (<div className="menu">
        <div>
            <h1>Our Menu</h1>
            <div id="buttons">
                <button className="button-value" onClick={() => setData(Categories)}>All</button>
                <button className="button-value" onClick={() => filterResult('Burger')}>Burger</button>
                <button className="button-value" onClick={() => filterResult('Pizza')}>Pizza</button>
                <button className="button-value" onClick={() => filterResult('Pasta')}>Pasta</button>
                <button className="button-value" onClick={() => filterResult('Fries')}>Fries</button>
            </div>
            <div className="">
                <div className="grid-container">
                    {data.map((values) => {
                        const { id, productName, description, price, image } = values;
                        return (
                            <>
                                <div className="card-parent" key={id}>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={image} alt="" className="" />
                                        </div>
                                        <div className="card-body">
                                            <h2 className="card-title">{productName}</h2>
                                            <p>{description}</p>
                                            <div className="price-container">
                                                <p>${price}</p>
                                                <a href="" className="icon-container"><FontAwesomeIcon icon={faCartShopping} /></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className="view-div">
                <a href="">View More</a>
            </div>
        </div>
    </div>
    );
};
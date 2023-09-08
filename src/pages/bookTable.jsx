import React, { useContext } from "react";
import "./bookTable.css";
export const BookTable = () => {
    return (
    <div className="book-div">
        <h1>Book A Table</h1>
        <div className="booking">
            <form className="book-form" action="" method="post">
                <input type="text" placeholder="Your Name" />
                <input type="number" name="" id="" placeholder="Your Phone Number" />
                <input type="email" name="" id="" placeholder="Your Email" />
                <select name="" id="" placeholder="How many persons?" >
                    <option value="How many persons?">How many persons?</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="datetime" name="" id="" />
                <button type="submit">BOOK NOW</button>
            </form>
            
        </div>
    </div>
    );
};
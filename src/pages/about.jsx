import React, { useContext } from "react";
import aboutImage from "../images/about-img.png";
import './about.css';
export const About = () => {
    return (
        <div className="about-div">
            <div className="about-image-column">
                <img src={aboutImage} alt="" className="about-image" />
            </div>
            <div className="about-content">
                <h1>We Are Fast Food</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
                <a href="">Read More</a>
            </div>
        </div>
    );
};
import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faMessage, faMobilePhone } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="ft-container">
                <div className="row">
                    <div className="col">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><a href="#"><FontAwesomeIcon icon={faLocationPin} /> Location</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faMobilePhone} /> Call +01 1234567890</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faMessage} /> demo@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Fast Food</h4>
                        <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
                        <div className="social-icons">
                            <a
                                href="https://www.youtube.com/c/jamesqquick"
                                className="youtube social"
                            >
                                <FontAwesomeIcon icon={faYoutube} size="2x" />
                            </a>
                            <a
                                href="https://www.facebook.com/learnbuildteach/"
                                className="facebook social"
                            >
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a
                                href="http://www.instagram.com/larnbuildteach"
                                className="instagram social"
                            >
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            <a href="https://wwww.twitter.com" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <h4>Opening Hours</h4>
                        <p>Everyday</p>
                        <p>10.00 Am - 10.00 Pm</p>
                    </div>
                </div>
                <div className="row">
                    <p className="copyp">
                        &copy; {new Date().getFullYear()} All Rights Reserved By Fast Food
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Footer;
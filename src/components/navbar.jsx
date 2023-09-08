import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="logo">
                <h1>Fast Food</h1>
            </div>
            <div className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={menuOpen ? "links open" : "links"}>
                <Link to="/"> HOME </Link>
                <Link to="/menu"> MENU </Link>
                <Link to="/about"> ABOUT </Link>
                <Link to="/booktable"> BOOK TABLE </Link>
            </div>
            <div className="icon-button-container">
                <div className="icons">
                    <Link to="/contact">
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </Link>
                    <Link to="/search">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                </div>
                <button>Order Online</button>
            </div>
        </div>
    );
};

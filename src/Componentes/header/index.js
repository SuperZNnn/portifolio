import React from "react";
import './style.css';

const Header = () => {
    return (
        <header>
            <a href="/">
                <img className="logo-img" src="logo512.png" alt="icon"/>
            </a>
            <a href="/">
                <h1 className="header-title">Rafael Soares</h1>
            </a>
            <div className="icons-redirect">
                <a target="blank" href="https://instagram.com/rafinhasoares.jar">
                    <i className="gg-instagram"></i>
                </a>
                <a target="blank" href="https://www.linkedin.com/in/rafael-soares-35285b286/">
                    <i className="fa fa-linkedin-square" style={{fontSize: '28px'}}></i>
                </a>
                
            </div>
        </header>
    )
}

export default Header;
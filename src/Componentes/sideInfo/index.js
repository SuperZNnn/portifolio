import React from "react";
import './style.css';
import NavigationLinks from "../navigationLinks";

const SideInfo = () => {
    return (
        <section className="sideInfo">
            <div className="profile-information">
                <img className="profile-img" src="assets/profile.jpg" alt="profile"/>
                <h1 className="profile-name">Rafael Soares</h1>
                <p className="profile-descrip">Desenvolvedor Full-Stack</p>
            </div>
            <NavigationLinks />
        </section>
    )
}

export default SideInfo;

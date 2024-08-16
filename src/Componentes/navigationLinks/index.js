import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavigationLinks = () => {
    const location = useLocation();

    return (
        <div className="links-sec">
            <Link to='/'>
                <p className={`link-redirect ${location.pathname === '/' ? 'selected' : ''}`}>Sobre</p>
            </Link>
            <Link to='/projetos'>
                <p className={`link-redirect ${location.pathname === '/projetos' ? 'selected' : ''}`}>Projetos</p>
            </Link>
            <Link to='/habilidades'>
                <p className={`link-redirect ${location.pathname === '/habilidades' ? 'selected' : ''}`}>Habilidades</p>
            </Link>
        </div>
    );
};

export default NavigationLinks;
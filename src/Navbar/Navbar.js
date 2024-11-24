import React, {useEffect, useState} from 'react';
import './Navbar.css';
import '../styles/flex.css';
import Icon from '../pictures/logo512.png';

const Navbar = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = window.innerWidth < 1350 ? 0 : 70; // Höhe der Navbar oder anderen Elementen
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div
            id="navbar-container"
        >
            <div
                id="navbar-content"
            >
                <img src={Icon} id="navbar-logo"  onClick={() => scrollToSection('logo-container')}/>
                <a className="navbar-link" onClick={() => scrollToSection('bandmitglieder')}>
                    Bandmitglieder
                </a>
                <a className="navbar-link" onClick={() => scrollToSection('seventees')}>
                    70's
                </a>
                <a className="navbar-link" onClick={() => scrollToSection('jazzstandard')}>
                    Jazz Standards
                </a>
                <a className="navbar-link" onClick={() => scrollToSection('latinjazz')}>
                    Latin Jazz
                </a>
                <a className="navbar-link" onClick={() => scrollToSection('poprockclassic')}>
                    Pop-Rock-Classic
                </a>
                <a className="navbar-link" onClick={() => scrollToSection('kontakt')}>
                    Kontakt
                </a>
                <div className="navbar-link">
                    <a onClick={() => scrollToSection('faqs')}>
                        FAQs
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Navbar;

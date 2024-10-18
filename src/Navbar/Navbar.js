import React, { useState, useEffect } from 'react';
import './Navbar.css';
import '../styles/flex.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Überwache das Scrollen des Fensters
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 120; // Höhe der Navbar oder anderen Elementen
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
            className={`${isScrolled ? 'sticky-navbar' : 'transparent-navbar'}`}
        >
            <div className="hamburger" onClick={toggleNavbar}>
                &#9776;
            </div>
            <div
                id="navbar-elements"
                className={`flex-row space-around ${isOpen ? 'open' : ''}`}
            >
                <a className="reiter" onClick={() => scrollToSection('bandmitglieder')}>
                    Bandmitglieder
                </a>
                <a className="reiter" onClick={() => scrollToSection('jazzpoplieder')}>
                    Jazz-Pop-Lieder
                </a>
                <a className="reiter" onClick={() => scrollToSection('weihnachtslieder')}>
                    Weihnachtslieder
                </a>
                <a className="reiter" onClick={() => scrollToSection('kontakt')}>
                    Kontakt
                </a>
                <a className="reiter" onClick={() => scrollToSection('faqs')}>
                    FAQs
                </a>
                <a className="reiter" onClick={() => scrollToSection('impressum')}>
                    Impressum
                </a>
            </div>
        </div>
    );
};

export default Navbar;

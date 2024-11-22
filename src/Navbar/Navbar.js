import React from 'react';
import './Navbar.css';
import '../styles/flex.css';

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 140; // Höhe der Navbar oder anderen Elementen
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
                <a className="navbar-link" onClick={() => scrollToSection('jazzpoplieder')}>
                    Jazz-Pop-Lieder
                </a>
                <a className="navbar-link" onClick={() => scrollToSection('weihnachtslieder')}>
                    Weihnachtslieder
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

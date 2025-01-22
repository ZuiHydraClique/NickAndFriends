import React, { useState } from "react";
import "./Navbar.css";
import "../styles/flex.css";
import Icon from "../pictures/logo512.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = window.innerWidth < 1350 ? 0 : 70; // Höhe der Navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  return (
    <div id="navbar-container">
      
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar-content menu ${isOpen ? "open" : ""}`}>
        <img
          src={Icon}
          id="navbar-logo"
          onClick={() => scrollToSection("logo-container")}
          alt=""
        />
        <div className="navbar-link" onClick={() => scrollToSection("bandmitglieder")}>
          Bandmitglieder
        </div>
        <div className="navbar-link" onClick={() => scrollToSection("seventees")}>
          70's
        </div>
        <div className="navbar-link" onClick={() => scrollToSection("jazzstandard")}>
          Jazz Standards
        </div>
        <div className="navbar-link" onClick={() => scrollToSection("latinjazz")}>
          Latin Jazz
        </div>
        <div className="navbar-link" onClick={() => scrollToSection("poprockclassic")}>
          Pop-Rock-Classic
        </div>
        <div className="navbar-link" onClick={() => scrollToSection("kontakt")}>
          Kontakt
        </div>
        <div className="navbar-link" onClick={() => scrollToSection("faqs")}>
          FAQs
        </div>
      </div>
    </div>
  );
};

export default Navbar;
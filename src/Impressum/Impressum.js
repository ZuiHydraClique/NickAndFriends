import React from 'react';
import './Impressum.css'; // CSS für Impressum
import '../styles/flex.css'; // Gemeinsame Flex-Stile

const Impressum = () => {
    return (
        <div id="impressum-container" className="flex-column center-all">
            <div id="impressum-headline">Impressum</div>
            <div>Alexander Teschauer</div>
            <div>Flaschenhofstraße 3, 90402 Nürnberg</div>
            <div>nickandfriendsband@gmail.com</div>
        </div>
    );
};

export default Impressum;

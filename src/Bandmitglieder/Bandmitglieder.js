import React from 'react';
import './Bandmitglieder.css'; // Stile für diese Komponente
import '../styles/flex.css'; // Gemeinsame Flex-Stile

const Bandmitglieder = () => {
    return (
        <div id="bandmitglieder-container">
            <h1>Bandmitglieder</h1>
            <div className="flex-column center-all gap-30">
                <div className="mitglied">
                    <h2>Nick</h2>
                    <div>Saxophon</div>
                    <div>Percussion</div>
                    <div>Gesang</div>
                </div>

                <div className="mitglied">
                    <h2>Flo</h2>
                    <div>Percussion</div>
                    <div>Gesang</div>
                </div>

                <div className="mitglied">
                    <h2>Alex</h2>
                    <div>Gitarre</div>
                </div>
            </div>
        </div>
    );
};

export default Bandmitglieder;

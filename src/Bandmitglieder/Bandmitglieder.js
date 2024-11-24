import React from 'react';
import './Bandmitglieder.css'; // Stile für diese Komponente
import '../styles/flex.css'; // Gemeinsame Flex-Stile
import Nick from '../pictures/Mitglieder/Nick.png'
import Alex from '../pictures/Mitglieder/Alex.png'
import Flo from '../pictures/Mitglieder/Flo.png'
import Icon from '../pictures/Sektionen/Bandmitglieder.png'

const Bandmitglieder = () => {
    return (
        <div className="section-container">
            <div className="headline flex-row">
                <h1>Bandmitglieder</h1>
                <img src={Icon} className="headline-icon"/>
            </div>
            <div className="flex-row center-all gap-10-prozent">
                <div className="mitglied">
                    <img src={Nick} className="band-image"/>
                    <h2>Nick</h2>
                    <div>Saxophon</div>
                    <div>Percussion</div>
                    <div>Gesang</div>
                </div>

                <div className="mitglied">
                    <img src={Flo} className="band-image"/>
                    <h2>Flo</h2>
                    <div>Percussion</div>
                    <div>Gesang</div>
                    <div className={"hidden"}>hidden</div>
                </div>

                <div className="mitglied">
                    <img src={Alex} className="band-image"/>
                    <h2>Alex</h2>
                    <div>Gitarre</div>
                    <div className={"hidden"}>hidden</div>
                    <div className={"hidden"}>hidden</div>
                </div>
            </div>
        </div>
    );
};

export default Bandmitglieder;

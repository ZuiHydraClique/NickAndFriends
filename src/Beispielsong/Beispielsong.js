import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Beispielsong.css';
import '../styles/flex.css';
import Icon from "../pictures/Akkordeonpfeile/musiknote_offen.png";
import Track from "../pictures/Track.wav"

const Beispielsong = () => {
    return (
        <div className="section-container">
            <div className="headline flex-row">
                <h1>Beispielsong</h1>
                <img src={Icon} className="headline-icon" alt=""/>
            </div>
            <div id="audio-container">
                <audio controls id="audio-box">
                    <source src={Track} type="audio/wav" />
                    Dein Browser unterstützt das Audio-Element nicht.
                </audio>
            </div>
        </div>
    );
};

export default Beispielsong;

import React, { useContext, useState } from 'react';
import './LatinJazz.css'; // Stile für diese Komponente
import '../../styles/flex.css';
import Icon from "../../pictures/Sektionen/Genres/LatinJazz.png"; // Gemeinsame Flex-Stile
import { SongContext } from '../../SongContext.js';

const LatinJazz = () => {
    const { addSong, removeSong } = useContext(SongContext);
    const [selectedCards, setSelectedCards] = useState([]);

    const songs = [
        { title: 'Desafinado', artist: 'Jazz-Standard' },
        { title: 'Wave', artist: 'Antônio Carlos Jobim' },
        { title: 'Girl From Ipanema', artist: 'Antônio Carlos Jobim' }
    ];

    const handleCardClick = (song, index) => {
        if (selectedCards.includes(index)) {
            // Entferne den Song, wenn er bereits ausgewählt ist
            setSelectedCards((prev) => prev.filter((i) => i !== index));
            removeSong(song); // Song aus der globalen Liste entfernen
        } else {
            // Füge den Song hinzu, wenn er nicht ausgewählt ist
            setSelectedCards((prev) => [...prev, index]);
            addSong(song); // Song zur globalen Liste hinzufügen
        }
    };

    return (
        <div className="section-container">
            <div className="headline flex-row">
                <h1>Latin Jazz</h1>
                <img src={Icon} className="headline-icon"/>
            </div>
            <div className="song-card-container flex-row space-around wrap">
                {songs.map((song, index) => (
                    <div 
                            className={`song-card ${selectedCards.includes(index) ? 'selected' : ''}`} 
                            key={index} 
                            onClick={() => handleCardClick(song, index)}
                        >
                    <div className="song-title">{song.title}</div>
                    <div>{song.artist}</div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default LatinJazz;

import React, { useContext, useEffect, useState } from 'react';
import './JazzStandards.css'; // Stile für diese Komponente
import '../../styles/flex.css';
import Icon from "../../pictures/Sektionen/Genres/Jazz Standards.png"; // Gemeinsame Flex-Stile
import { SongContext } from '../../SongContext.js';

const JazzStandards = () => {
    const { addSong, removeSong, registerRemoveCallback } = useContext(SongContext);
    const [selectedCards, setSelectedCards] = useState([]);

    const songs = [
        { title: 'Alice in Wonderland', artist: 'Jazz-Standard' },
        { title: 'All of Me', artist: 'Jazz-Standard' },
        { title: 'Ceora', artist: 'Jazz-Standard' },
        { title: 'Desafinado', artist: 'Jazz-Standard' },
        { title: 'Fly Me To The Moon', artist: 'Jazz-Standard' },
        { title: 'Georgia On My Mind', artist: 'Jazz-Standard' },
        { title: 'Girl From Ipanema', artist: 'Antônio Carlos Jobim' },
        { title: 'How High The Moon', artist: 'Jazz-Standard' },
        { title: "It Don't Mean A Thing", artist: 'Jazz-Standard' },
        { title: 'Lullaby Of Birdland', artist: 'Jazz-Standard' },
        { title: 'Someday My Prince Will Come', artist: 'Jazz-Standard' },
        { title: 'Summertime', artist: 'George Gershwin' },
        { title: 'The Nearness Of You', artist: 'Jazz-Standard' }
    ];

    useEffect(() => {
        // Registriere einen Callback, um den lokalen Zustand zu aktualisieren
        const handleRemoveSong = (removedSong) => {
            setSelectedCards((prev) =>
                prev.filter((index) => songs[index]?.title !== removedSong.title)
            );
        };

        registerRemoveCallback(handleRemoveSong);
    }, [registerRemoveCallback, songs]);

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
                <h1>Jazz Standards</h1>
                <img src={Icon} className="headline-icon"/>
            </div>
            <div className="song-card-container">
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

export default JazzStandards;
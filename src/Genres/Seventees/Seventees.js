import React, { useContext, useEffect, useState } from 'react';
import './Seventees.css';
import '../../styles/flex.css';
import '../../styles/songcard.css';
import Icon from "../../pictures/Sektionen/Genres/70's.png";
import { SongContext } from '../../SongContext.js';

const Seventees = () => {

    const { addSong, removeSong, registerRemoveCallback } = useContext(SongContext);
    const [selectedCards, setSelectedCards] = useState([]);
    
    const songs = React.useMemo(() => [
        { title: "Ain't No Sunshine", artist: 'Bill Withers' },
        { title: 'Billie Jean', artist: 'Michael Jackson' },
        { title: 'Come Together', artist: 'The Beatles' },
        { title: 'Hey Jude', artist: 'The Beatles' },
        { title: 'Imagine', artist: 'John Lennon' },
        { title: "Isn't She Lovely", artist: 'Stevie Wonder' },
        { title: 'Lean On Me', artist: 'Bill Withers' },
        { title: 'Smells Like Teen Spirit', artist: 'Nirvana' },
        { title: 'Sunny', artist: 'Boney M.' },
        { title: 'The Long And Winding Road', artist: 'The Beatles' }
    ], []);

    useEffect(() => {
        const handleRemove = (song) => {
            if (song.title === '__ALL__') {
                setSelectedCards([]); // Alles abwählen
            } else {
                setSelectedCards((prev) =>
                    prev.filter((index) => songs[index]?.title !== song.title)
                );
            }
        };
        registerRemoveCallback(handleRemove);
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
                <h1>70's</h1>
                <img src={Icon} className="headline-icon" alt=""/>
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

export default Seventees;

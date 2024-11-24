import React from 'react';
import './Seventees.css';
import '../../styles/flex.css';
import '../../styles/songcard.css';
import Icon from "../../pictures/Sektionen/Genres/LatinJazz.png";

const Seventees = () => {
    const songs = [
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
    ];

    return (
        <div className="section-container">
            <div className="headline flex-row">
                <h1>70's</h1>
                <img src={Icon} className="headline-icon"/>
            </div>
            <div className="song-card-container flex-row space-around wrap">
                {songs.map((song, index) => (
                    <div className="song-card" key={index}>
                        <div className="song-title">{song.title}</div>
                        <div>{song.artist}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Seventees;

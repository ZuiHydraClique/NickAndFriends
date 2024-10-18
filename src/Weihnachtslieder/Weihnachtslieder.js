import React from 'react';
import './Weihnachtslieder.css'; // Stile für diese Komponente
import '../styles/flex.css'; // Gemeinsame Flex-Stile

const Weihnachtslieder = () => {
    const songs = [
        {
            title: 'All I Want For Christmas Is You',
            artist: 'Mariah Carey'
        },
        {
            title: 'Have Yourself a Merry Little Christmas',
            artist: 'Frank Sinatra'
        },
        {
            title: "It's Beginning to Look a Lot Like Christmas",
            artist: 'Michael Bublé'
        },
        {
            title: 'Let It Snow! Let It Snow! Let It Snow!',
            artist: 'Dean Martin'
        }
    ];

    return (
        <div>
            <h1>Weihnachtslieder</h1>
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

export default Weihnachtslieder;

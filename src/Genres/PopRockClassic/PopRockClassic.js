import React from 'react';
import './PopRockClassic.css'; // Stile für diese Komponente
import '../../styles/flex.css';
import Icon from "../../pictures/Sektionen/Genres/Pop_Rock-Classics.png"; // Gemeinsame Flex-Stile

const PopRockClassic = () => {
    const songs = [
        { title: 'All of Me', artist: 'John Legend' },
        { title: 'But for Now', artist: 'Jamie Cullum' },
        { title: 'Cannonball', artist: 'Damien Rice' },
        { title: "Don't Look Back In Anger", artist: 'Oasis' },
        { title: "Don't Stop Me Now", artist: 'Queen' },
        { title: 'Englishman in New York', artist: 'Sting' },
        { title: 'Every Breath You Take', artist: 'The Police' },
        { title: 'Fields Of Gold', artist: 'Sting' },
        { title: 'Get Lucky', artist: 'Daft Punk' },
        { title: 'I See Fire', artist: 'Ed Sheeran' },
        { title: 'I Took A Pill In Ibiza', artist: 'Jamie Cullum' },
        { title: 'Love Yourself', artist: 'Justin Bieber' },
        { title: 'Moondance', artist: 'Van Morrison' },
        { title: 'My Yard', artist: 'Jamie Cullum' },
        { title: 'No Woman, No Cry', artist: 'Bob Marley & The Wailers' },
        { title: 'Seven Nations Army', artist: 'The White Stripes' },
        { title: 'Shape Of My Heart', artist: 'Sting' },
        { title: 'Something Just Like This', artist: 'The Chainsmokers & Coldplay' },
        { title: 'Walk On The Wild Side', artist: 'Lou Reed' },
        { title: 'Zieh die Schuh aus', artist: 'Roger Cicero' }
    ];

    return (
        <div className="section-container">
            <div className="headline flex-row">
                <h1>Pop-Rock-Classic</h1>
                <img src={Icon} className="headline-icon" />
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

export default PopRockClassic;

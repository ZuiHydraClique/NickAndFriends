import React from 'react';
import './JazzStandards.css'; // Stile für diese Komponente
import '../../styles/flex.css';
import Icon from "../../pictures/Sektionen/Genres/Jazz Standards.png"; // Gemeinsame Flex-Stile

const JazzStandards = () => {
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

    return (
        <div className="section-container">
            <div className="headline flex-row">
                <h1>Jazz Standards</h1>
                <img src={Icon} className="headline-icon"/>
            </div>
            <div className="song-card-container">
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

export default JazzStandards;
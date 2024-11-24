import React from 'react';
import './LatinJazz.css'; // Stile für diese Komponente
import '../../styles/flex.css';
import Icon from "../../pictures/Sektionen/Genres/LatinJazz.png"; // Gemeinsame Flex-Stile

const LatinJazz = () => {
    const songs = [
        { title: 'Desafinado', artist: 'Jazz-Standard' },
        { title: 'Wave', artist: 'Antônio Carlos Jobim' },
        { title: 'Girl From Ipanema', artist: 'Antônio Carlos Jobim' }
    ];

    return (
        <div className="section-container">
            <div className="headline flex-row">
                <h1>Latin Jazz</h1>
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

export default LatinJazz;

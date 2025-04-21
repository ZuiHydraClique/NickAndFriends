import React, { createContext, useState } from 'react';

export const SongContext = createContext();

export const SongProvider = ({ children }) => {
    const [selectedSongs, setSelectedSongs] = useState([]);

    const addSong = (song) => {
        setSelectedSongs((prevSongs) => [...prevSongs, song]);
    };

    const removeSong = (song) => {
        setSelectedSongs((prevSongs) =>
            prevSongs.filter((s) => s.title !== song.title)
        );
    };

    return (
        <SongContext.Provider value={{ selectedSongs, addSong, removeSong }}>
            {children}
        </SongContext.Provider>
    );
};
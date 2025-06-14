import React, { createContext, useState } from 'react';

export const SongContext = createContext();

export const SongProvider = ({ children }) => {
    const [selectedSongs, setSelectedSongs] = useState([]);
    const removeCallbacks = []; // Liste der Callbacks

    const addSong = (song) => {
        setSelectedSongs((prevSongs) => [...prevSongs, song]);
    };

    const removeSong = (song) => {
        setSelectedSongs((prevSongs) =>
            prevSongs.filter((s) => s.title !== song.title)
        );

        // Benachrichtige alle registrierten Callbacks
        removeCallbacks.forEach((callback) => callback(song));
    };

    const clearSongs = () => {
        setSelectedSongs([]);
        // Optional: Benachrichtige Callbacks, falls du die lokale Auswahl in Sektionen auch leeren willst
        removeCallbacks.forEach((callback) => callback({ title: '__ALL__' }));
    };

    const registerRemoveCallback = (callback) => {
        removeCallbacks.push(callback);
    };

    return (
        <SongContext.Provider value={{ selectedSongs, addSong, removeSong, registerRemoveCallback, clearSongs }}>
            {children}
        </SongContext.Provider>
    );
};
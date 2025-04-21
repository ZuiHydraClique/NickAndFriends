import React, { useState, useContext } from 'react';
import emailjs from 'emailjs-com'; // EmailJS importieren
import './Kontakt.css'; // Stile für diese Komponente
import '../styles/flex.css';
import MusiknoteGeschlossen from '../pictures/Akkordeonpfeile/musiknote_zu.png';
import Icon from "../pictures/Sektionen/Kontakt.png"; // Gemeinsame Flex-Stile
import { SongContext } from '../SongContext.js';

const Kontakt = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false
    });

    const [isSent, setIsSent] = useState(false);
    const [showNotification, setShowNotification] = useState(false); // Benachrichtigungs-Flag

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validierung
        let newErrors = { ...errors };
        if (name === 'name') {
            newErrors.name = value.trim() === '';
        } else if (name === 'email') {
            newErrors.email = !/\S+@\S+\.\S+/.test(value);
        }

        setErrors(newErrors);

        // Benachrichtigung ausblenden, wenn alle Felder korrekt sind
        if (!newErrors.name && !newErrors.email) {
            setShowNotification(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Überprüfen, ob mindestens 3 Songs ausgewählt sind
        if (selectedSongs.length < 3) {
            setShowNotification(true); // Fehlermeldung anzeigen
            return;
        }
    
        // Überprüfen, ob die Felder korrekt ausgefüllt sind
        const hasErrors =
            formData.name.trim() === '' ||
            !/\S+@\S+\.\S+/.test(formData.email);
    
        if (hasErrors) {
            setShowNotification(true); // Fehlermeldung anzeigen
        } else {
            setShowNotification(false); // Fehlermeldung ausblenden
    
            // Songs zur Nachricht hinzufügen
            const songList = selectedSongs
                .map((song, index) => `${index + 1}. ${song.title} - ${song.artist}`)
                .join('\n');
    
            // E-Mail-Daten vorbereiten
            const emailData = {
                name: formData.name,
                email: formData.email,
                message: `Ausgewählte Songs:\n${songList}`
            };
    
            emailjs
                .send(
                    'service_vnd7r35',
                    'template_eu4xloo',
                    emailData,
                    'HMTkyNZjAXRKX8-8-'
                )
                .then(
                    (response) => {
                        console.log('SUCCESS!', response.status, response.text);
                        setIsSent(true);
                        setFormData({ name: '', email: '' }); // Formular zurücksetzen
                        setErrors({ name: false, email: false }); // Fehler zurücksetzen
                    },
                    (err) => {
                        console.error('FAILED...', err);
                        alert('Es gab ein Problem beim Senden der Nachricht. Bitte versuchen Sie es später erneut.');
                    }
                );
        }
    };

    const { selectedSongs } = useContext(SongContext);
    const [isBubbleOpen, setIsBubbleOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const toggleBubble = () => {
        if (isBubbleOpen) {
            setIsClosing(true); // Schließ-Animation starten
            setTimeout(() => {
                setIsBubbleOpen(false); // Nach der Animation schließen
                setIsClosing(false); // Zustand zurücksetzen
            }, 300); // Dauer der Animation (muss mit CSS übereinstimmen)
        } else {
            setIsBubbleOpen(true);
        }
    };

    return (
        <div className="section-container">
            <div className="headline flex-row">
                <h1>Kontakt</h1>
                <img src={Icon} className="headline-icon" alt="icon" />
            </div>
            <div className="flex-row center-all">
                <div id="kontakt-box">
                    {isSent && <p className="success-message">Nachricht erfolgreich gesendet!</p>}

                    {showNotification && !isSent && (
                        <p id="error-notification">
                            {selectedSongs.length < 3
                                ? 'Bitte wählen Sie mindestens 3 Songs aus, bevor Sie das Formular absenden.'
                                : 'Bitte überprüfen Sie Ihre Angaben, bevor Sie das Formular absenden. Alle Felder müssen ausgefüllt sein.'}
                        </p>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div id="mail-name-container">
                            <div className="flex-column">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="E-Mail"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <span className="error">Bitte geben Sie eine gültige E-Mail-Adresse ein.</span>
                                )}
                            </div>

                            <div className="flex-column">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <span className="error">Name ist erforderlich.</span>}
                            </div>
                        </div>

                        <div id="song-list">
                            <ul>
                                {selectedSongs.length > 0 ? (
                                    selectedSongs.map((song, index) => (
                                        <div key={index}>
                                            • {song.title} - {song.artist}
                                        </div>
                                    ))
                                ) : (
                                    <div id="song-zero-pointer">noch keine Songs ausgewählt</div>
                                )}
                            </ul>
                            
                            <div id="song-list-amount">Song-Anzahl: {selectedSongs.length}</div>
                        </div>

                        <div id="submit-button-container">
                            <button
                                id="submit-button"
                                type="submit"
                            >
                                Absenden
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            

            <div className="bubble-container">
                <button className="bubble-toggle" onClick={toggleBubble}>
                    <img
                        src={MusiknoteGeschlossen}
                        alt="Musiknote"
                        className="bubble-icon"
                    />
                </button>
                {isBubbleOpen && (
                    <div className={`bubble ${isClosing ? 'closing' : ''}`}>
                        <h3>Ausgewählte Songs</h3>
                        <ul className="bubble-list">
                            {selectedSongs.length > 0 ? (
                                selectedSongs.map((song, index) => (
                                    <li key={index}>
                                        {song.title} - {song.artist}
                                    </li>
                                ))
                            ) : (
                                <li>keine Songs ausgewählt</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Kontakt;

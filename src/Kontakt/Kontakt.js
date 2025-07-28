import React, { useState, useEffect, useContext } from 'react';
import emailjs from 'emailjs-com'; // EmailJS importieren
import './Kontakt.css'; // Stile für diese Komponente
import '../styles/flex.css';
import MusiknoteGeschlossen from '../pictures/Akkordeonpfeile/musiknote_zu.png';
import Icon from "../pictures/Sektionen/Kontakt.png"; // Gemeinsame Flex-Stile
import entfernenButton from "../pictures/kleiner-entfernen-button.png"; // Gemeinsame Flex-Stile
import { SongContext } from '../SongContext.js';

const Kontakt = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        datum: '',
        uhrzeitvon: '',
        dauer: '',
        ort: '',
        plz: '',
        strasse: '',
        hausnummer: '',
        nachricht: ''
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        uhrzeitbis: false
    });

    const [isSent, setIsSent] = useState(false);
    const [showNotification, setShowNotification] = useState(false); // Benachrichtigungs-Flag

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedFormData = { ...formData, [name]: value };
        setFormData(updatedFormData);

        let newErrors = { ...errors };
        if (name === 'email') {
            newErrors.email = !/\S+@\S+\.\S+/.test(value);
        } else if (name === 'name') {
            newErrors[name] = value.trim() === '';
        }
        setErrors(newErrors);

        if (Object.values(newErrors).every((err) => !err)) {
            setShowNotification(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Überprüfen, ob mindestens 3 Songs ausgewählt sind
        //if (selectedSongs.length < 3) {
        //    setShowNotification(true); // Fehlermeldung anzeigen
        //    return;
        //}
    
        let newErrors = {};
        newErrors.email = !/\S+@\S+\.\S+/.test(formData.email);
        newErrors.name = formData.name.trim() === '';

        setErrors(newErrors);

        if (Object.values(newErrors).some((err) => err)) {
            setShowNotification(true);
            return;
        }
    
            // Songs zur Nachricht hinzufügen
            const songList = selectedSongs
                .map((song, index) => `${index + 1}. ${song.title} - ${song.artist}`)
                .join('\n');
    
            // E-Mail-Daten vorbereiten
            const emailData = {
                name: formData.name,
                email: formData.email,
                datum: formData.datum,
                uhrzeitvon: formData.uhrzeitvon,
                dauer: formData.dauer,
                ort: formData.ort,
                plz: formData.plz,
                strasse: formData.strasse,
                hausnummer: formData.hausnummer,
                message:
                    `Ausgewählte Songs:\n${songList}\n\n` +
                    `Datum: ${formData.datum}\n` +
                    `Uhrzeit Von: ${formData.uhrzeitvon}\n` +
                    `Dauer: ${formData.dauer} Std.` +
                    `Ort: ${formData.ort}\n` +
                    `PLZ: ${formData.plz}\n` +
                    `Straße: ${formData.strasse} ${formData.hausnummer}\n` +
                    (formData.message ? `\n\nNachricht: ${formData.message}` : '')
            };
    
            console.log('E-Mail-Daten:', emailData); // Debugging-Ausgabe

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
        
    };

    const { selectedSongs, removeSong, clearSongs } = useContext(SongContext);
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

    useEffect(() => {
    const closeBubbleHandler = () => setIsBubbleOpen(false);
    window.addEventListener("closeBubble", closeBubbleHandler);
    return () => window.removeEventListener("closeBubble", closeBubbleHandler);
    }, []);

    // für Datumsselektor
    const today = new Date();
    today.setDate(today.getDate() + 14);
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const minDate = `${yyyy}-${mm}-${dd}`;

    return (
        <div className="section-container">
            <div className="headline flex-row">
                <h1>Anfrage</h1>
                <img src={Icon} className="headline-icon" alt="icon" />
            </div>
            <div className="flex-row center-all">
                <div id="kontakt-box">


                    <form onSubmit={handleSubmit}>


                        <div id="main-input-container">
                            
                            <div className="group-container">
                                <h4>Kontaktdaten</h4>
                                <div className="flex-column">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="Name (Pflichtfeld)" 
                                        value={formData.name} 
                                        onChange={handleChange} />
                                        {errors.name && <span className="error">Name ist erforderlich!</span>}
                                </div>

                                <div className="flex-column">
                                    <input 
                                        type="text" 
                                        name="email" 
                                        placeholder="Email (Pflichtfeld)" 
                                        value={formData.email} 
                                        onChange={handleChange} />
                                        {errors.email && (
                                            <span className="error">
                                                {formData.email === ''
                                                ? 'Email ist erforderlich!'
                                                : 'Email ist ungültig!'}
                                            </span>
                                        )}
                                </div>
                            </div>
                            


                            
                            <div className="group-container">
                                <h4>Zeitpunkt</h4>
                                <div className="first-layer-form">
                                    
                                    <div className="flex-column date-input">
                                        <input 
                                            min={minDate} 
                                            type="date" 
                                            name="datum" 
                                            placeholder="Datum" 
                                            value={formData.datum} 
                                            onChange={handleChange} />
                                    </div>

                                    <div className="uhrzeit-responsive-wrapper">
                                        {errors.uhrzeitbis && (
                                            <span className="error-tooltip-wrapper">
                                                <span className="error-dot" />
                                                <span className="error-tooltip">
                                                    Bitte korrigieren Sie die Uhrzeit!
                                                </span>
                                            </span>
                                        )}
                                        <div className="second-layer-form">
                                            <div className="flex-column uhrzeit-wrapper">
                                                <input 
                                                    type="time" 
                                                    className="uhrzeit-input"
                                                    name="uhrzeitvon" 
                                                    placeholder="Uhrzeit von" 
                                                    value={formData.uhrzeitvon} 
                                                    onChange={handleChange} />
                                            </div>

                                            <select
                                                name="dauer"
                                                value={formData.dauer}
                                                onChange={handleChange}
                                                placeholder="Dauer"
                                                id="dauer-select"
                                            >
                                                <option value="" disabled>Dauer</option>
                                                <option value="0.5">0.5  Stunde</option>
                                                <option value="1">1  Stunde</option>
                                                <option value="1.5">1.5  Stunden</option>
                                                <option value="2">2  Stunden</option>
                                                <option value="2.5">2.5  Stunden</option>
                                                <option value="3">3  Stunden</option>
                                                <option value="3.5">3.5  Stunden</option>
                                                <option value="4">4  Stunden</option>
                                                <option value="4.5">4.5  Stunden</option>
                                                <option value="5">5  Stunden</option>
                                                <option value="5.5">5.5  Stunden</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="group-container">
                                <h4>Adresse</h4>
                                <div className="first-layer-form">
                                    <div className="flex-column ort-wrapper">
                                        <input 
                                            type="text" 
                                            name="ort" 
                                            placeholder="Ort" 
                                            value={formData.ort} 
                                            onChange={handleChange} />
                                    </div>
                                    <div className="flex-column plz-wrapper">
                                        <input 
                                            type="text" 
                                            name="plz" 
                                            placeholder="PLZ" 
                                            value={formData.plz} 
                                            onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="first-layer-form">
                                    <div className="flex-column strasse-wrapper">
                                        <input 
                                            type="text" 
                                            name="strasse" 
                                            placeholder="Straße" 
                                            value={formData.strasse} 
                                            onChange={handleChange} />
                                    </div>
                                    <div className="flex-column hausnummer-wrapper">
                                        <input 
                                            type="text" 
                                            name="hausnummer" 
                                            placeholder="HNr." 
                                            value={formData.hausnummer} 
                                            onChange={handleChange} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-column">
                                <h4>Nachricht</h4>
                                <textarea
                                    style={{marginTop: '20px'}}
                                    name="nachricht"
                                    placeholder="Anlass, Wünsche, ..."
                                    value={formData.nachricht}
                                    onChange={handleChange}
                                    rows={4}
                                />
                            </div>
                        </div>

                        <div id="song-list">
                            <div id="song-title-big">Ausgewählte Songs</div>
                        <div id="song-list-amount">Song-Anzahl: {selectedSongs.length}</div>
                            <div className="bubble-line"></div>
                             {selectedSongs.length > 0 ? (
                                <>
                                    {selectedSongs.map((song, index) => (
                                        <div key={index} className="song-list-item">
                                            <div>
                                                <div className="song-title-small">{song.title}</div>
                                                <div className="song-artist-small">{song.artist}</div>
                                            </div>
                                            <button
                                                className="remove-song-button"
                                                onClick={() => removeSong(song)}
                                            >
                                                Entfernen
                                            </button>
                                        </div>
                                    ))}
                                    
                                    <button
                                        className="remove-all-songs-button"
                                        type="button"
                                        onClick={clearSongs}
                                    >
                                        Alle Songs entfernen
                                    </button>
                                </>
                            ) : (
                                <div id="song-zero-pointer">noch keine Songs ausgewählt</div>
                            )}
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
                    {isSent && <p className="success-message">Nachricht erfolgreich gesendet!</p>}

                    {showNotification && !isSent && (
                        <p id="error-notification">
                            {/*{selectedSongs.length < 3
                                ? 'Bitte wählen Sie mindestens 3 Songs aus, bevor Sie das Formular absenden.'*/}
                                Bitte überprüfen Sie Ihre Angaben, bevor Sie das Formular absenden.<br/>
                                Alle Felder müssen ausgefüllt sein.
                        </p>
                    )}
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
                        <h3 id="bubble-title">Ausgewählte Songs</h3>
                        <div className="bubble-line"></div>
                        <div id="song-list-amount">Song-Anzahl: {selectedSongs.length}</div>
                        <ul className="bubble-list">
                            {selectedSongs.length > 0 ? (
                                selectedSongs.map((song, index) => (
                                        <li key={index}>
                                            <div className="bubble-line"></div>
                                            <div className="bubble-list-item">
                                                <div className="bubble-song-info">
                                                    <div className="song-title-small">{song.title}</div>
                                                    <div className="song-artist-small">{song.artist}</div>
                                                </div>
                                                <button
                                                    className="remove-song-button-small"
                                                    onClick={() => removeSong(song)}
                                                >
                                                    <img src={entfernenButton} alt="Entfernen" className="remove-song-img" />
                                                </button>
                                            </div>
                                        </li>
                                ))
                                
                            ) : (
                                <>
                                    <div className="bubble-line"></div>
                                    <li>keine Songs ausgewählt</li>
                                </>
                            )}
                        </ul>
                        <div className="bubble-line"></div>
                        {selectedSongs.length > 0 ? (
                            <button
                                className="remove-all-songs-button"
                                type="button"
                                onClick={clearSongs}
                            >
                                Alle Songs entfernen
                            </button>
                        ) : (
                            <div></div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Kontakt;

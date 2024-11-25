import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // EmailJS importieren
import './Kontakt.css'; // Stile für diese Komponente
import '../styles/flex.css';
import Icon from "../pictures/Sektionen/Kontakt.png"; // Gemeinsame Flex-Stile

const Kontakt = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
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
        } else if (name === 'message') {
            newErrors.message = value.trim() === '';
        }

        setErrors(newErrors);

        // Benachrichtigung ausblenden, wenn alle Felder korrekt sind
        if (!newErrors.name && !newErrors.email && !newErrors.message) {
            setShowNotification(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const hasErrors =
            formData.name.trim() === '' ||
            !/\S+@\S+\.\S+/.test(formData.email) ||
            formData.message.trim() === '';

        if (hasErrors) {
            setShowNotification(true); // Benachrichtigung anzeigen
        } else {
            setShowNotification(false); // Benachrichtigung ausblenden, wenn erfolgreich
            emailjs
                .send(
                    'service_vnd7r35',
                    'template_eu4xloo',
                    formData,
                    'HMTkyNZjAXRKX8-8-'
                )
                .then(
                    (response) => {
                        console.log('SUCCESS!', response.status, response.text);
                        setIsSent(true);
                        setFormData({ name: '', email: '', message: '' }); // Formular zurücksetzen
                        setErrors({ name: false, email: false, message: false }); // Fehler zurücksetzen
                    },
                    (err) => {
                        console.error('FAILED...', err);
                        alert('Es gab ein Problem beim Senden der Nachricht. Bitte versuchen Sie es später erneut.');
                    }
                );
        }
    };

    return (
        <div className="section-container">
            <div className="headline flex-row">
                <h1>Kontakt</h1>
                <img src={Icon} className="headline-icon" />
            </div>
            <div className="flex-row center-all">
                <div id="kontakt-box">
                    {isSent && <p className="success-message">Nachricht erfolgreich gesendet!</p>}

                    {/* Fehlermeldung bei falschen Angaben */}
                    {showNotification && !isSent && (
                        <p id="error-notification">
                            Bitte überprüfen Sie Ihre Angaben, bevor Sie das Formular absenden.<br />
                            Alle Felder müssen ausgefüllt sein.
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

                            <div className="flex-column">
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Welche Lieder möchten Sie hören?"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                {errors.message && <span className="error">Nachricht ist erforderlich.</span>}
                            </div>

                            <div id="submit-button-container">
                                <button
                                    id="submit-button"
                                    type="submit"
                                >
                                    Absenden
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Kontakt;

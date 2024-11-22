import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // EmailJS importieren
import './Kontakt.css'; // Stile für diese Komponente
import '../styles/flex.css'; // Gemeinsame Flex-Stile

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validation
        if (name === 'name') {
            setErrors({ ...errors, name: value.trim() === '' });
        } else if (name === 'email') {
            setErrors({ ...errors, email: !/\S+@\S+\.\S+/.test(value) });
        } else if (name === 'message') {
            setErrors({ ...errors, message: value.trim() === '' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!errors.name && !errors.email && !errors.message && formData.name && formData.email && formData.message) {
            emailjs
                .send(
                    'service_id', // Ersetze mit deinem EmailJS-Service-ID
                    'template_id', // Ersetze mit deiner EmailJS-Template-ID
                    formData,
                    'user_id' // Ersetze mit deinem EmailJS-User-ID
                )
                .then(
                    (response) => {
                        console.log('SUCCESS!', response.status, response.text);
                        setIsSent(true);
                        setFormData({ name: '', email: '', message: '' }); // Formular zurücksetzen
                    },
                    (err) => {
                        console.error('FAILED...', err);
                        alert('Es gab ein Problem beim Senden der Nachricht. Bitte versuchen Sie es später erneut.');
                    }
                );
        }
    };

    return (
        <div id="kontakt-container">
            <h1>Kontakt</h1>
            <div className="flex-row center-all">
                <div id="kontakt-box">
                    {isSent && <p className="success-message">Nachricht erfolgreich gesendet!</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="flex-row center-all gap-30">
                            <div className="flex-column">
                                <label htmlFor="email">E-Mail:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <span className="error">Bitte geben Sie eine gültige E-Mail-Adresse ein.</span>
                                )}
                            </div>

                            <div className="flex-column">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <span className="error">Name ist erforderlich.</span>}
                            </div>
                        </div>

                        <div className="flex-column">
                            <label htmlFor="message">Nachricht:</label>
                            <textarea
                                id="message"
                                name="message"
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
                                disabled={
                                    errors.name || errors.email || errors.message || !formData.name || !formData.email || !formData.message
                                }
                            >
                                Absenden
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Kontakt;

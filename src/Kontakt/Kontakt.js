import React, { useState } from 'react';
import './Kontakt.css'; // Stile für diese Komponente
import '../styles/flex.css'; // Gemeinsame Flex-Stile

const Kontakt = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const [errors, setErrors] = useState({
        name: false,
        email: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validation
        if (name === 'name') {
            setErrors({ ...errors, name: value.trim() === '' });
        } else if (name === 'email') {
            setErrors({ ...errors, email: !/\S+@\S+\.\S+/.test(value) });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errors.name && !errors.email && formData.name && formData.email) {
            console.log(formData); // Hier kann die Funktion zum Versenden von E-Mails integriert werden
        }
    };

    return (
        <div>
            <h1>Kontakt</h1>
            <div className="flex-row center-all">
                <div id="kontakt-box">
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
                                {errors.email && <span className="error">Bitte geben Sie eine gültige E-Mail-Adresse ein.</span>}
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

                        <div id="submit-button-container">
                            <button
                                id="submit-button"
                                type="submit"
                                disabled={errors.name || errors.email || !formData.name || !formData.email}
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

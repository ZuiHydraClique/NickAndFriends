import React, { useState } from 'react';
import './FAQ.css'; // Stile für diese Komponente
import '../styles/flex.css'; // Gemeinsame Flex-Stile

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const items = [
        { title: 'Wie lange dauert ein Auftritt?', content: 'In der Regel 3 Stunden.' },
        { title: 'Kann man Songwünsche äußern?', content: 'Ja, gerne im Voraus mitteilen.' },
        { title: 'Wie viel kostet ein Auftritt?', content: 'Preise variieren je nach Dauer und Ort.' },
        { title: 'Spielt ihr auch im Ausland?', content: 'Ja, aber zusätzliche Reisekosten fallen an.' },
        { title: 'Ist eine Anzahlung erforderlich?', content: 'Ja, 30% im Voraus.' },
        { title: 'Wie lange im Voraus sollte man buchen?', content: 'Mindestens 3 Monate.' },
        { title: 'Kann man euch vorher live sehen?', content: 'Ja, bei öffentlichen Events möglich.' },
        { title: 'Habt ihr eine eigene Soundanlage?', content: 'Ja, wir bringen unsere eigene Ausrüstung mit.' },
        { title: 'Spielt ihr auch auf Firmenfeiern?', content: 'Ja, wir sind flexibel bei der Art des Events.' },
        { title: 'Gibt es eine Mindestbuchungsdauer?', content: 'Ja, die Mindestbuchungsdauer beträgt 2 Stunden.' }
    ];

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <h1>FAQs</h1>
            <div className="flex-row center-all">
                <div className="accordion">
                    {items.map((item, i) => (
                        <div key={i}>
                            <div className="accordion-header" onClick={() => toggle(i)}>
                                <h3>{item.title}</h3>
                                <span>{openIndex === i ? '-' : '+'}</span>
                            </div>
                            <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;

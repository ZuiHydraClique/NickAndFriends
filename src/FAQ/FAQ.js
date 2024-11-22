import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FAQ.css';
import '../styles/flex.css';

const FAQ = () => {
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
        { title: 'Gibt es eine Mindestbuchungsdauer?', content: 'Ja, die Mindestbuchungsdauer beträgt 2 Stunden.' },
    ];

    return (
        <div id="faq-container">
            <h1>FAQs</h1>
            <div className="flex-row center-all">
                <div className="accordion">
                    <Accordion flush>
                        {items.map((item, index) => (
                            <Accordion.Item eventKey={index.toString()} key={index}>
                                <Accordion.Header>{item.title}</Accordion.Header>
                                <Accordion.Body>
                                    <p>{item.content}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default FAQ;

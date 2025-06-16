import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FAQ.css';
import '../styles/flex.css';
import Icon from "../pictures/Sektionen/FAQ.png";

const FAQ = () => {
    const items = [
        { title: 'Wie lange dauert ein Auftritt?', content: '0,5 bis 4 Stunden. Kürzere oder längere Auftritte sind nach Abstimmung auch möglich.' },
        { title: 'Wie lange im Voraus sollte man buchen?', content: 'Im besten Fall bitte mindestens 2 Monate vorher. Kurzfristigere Anfragen sind aber ebenso möglich.' },
        { title: 'Spielt ihr auch auf Firmenfeiern?', content: 'Ja, sehr gerne. Wir sind flexibel bei der Art des Events. Wir haben zudem Weihnachtslieder im Repertoire.' },
        { title: 'Habt ihr eine eigene Soundanlage?', content: 'Ja, wir bringen unsere eigene Ausrüstung mit.' },
        { title: 'Kann man euch vorher live sehen?', content: 'Leider nicht, aber Sie können sich unseren Teaser hier anhören.' }
    ];

    return (
        <div className="section-container">
            <div className="headline flex-row">
                <h1>FAQs</h1>
                <img src={Icon} className="headline-icon"/>
            </div>
            <div className="flex-row center-all accordion-container">
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

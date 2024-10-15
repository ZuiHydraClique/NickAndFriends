import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass
  ],
  templateUrl: './faqs.component.html',
  styleUrls: [
    './faqs.component.css',
    '../styles/flex.css'
  ]
})
export class FaqsComponent {

idToShow: number | undefined;
 openModal(id: number) {
  this.idToShow = id;
 }


  items = [
    {
      title: 'Wie lange dauert ein Auftritt?',
      content: 'In der Regel 3 Stunden.'
    },
    {
      title: 'Kann man Songwünsche äußern?',
      content: 'Ja, gerne im Voraus mitteilen.'
    },
    {
      title: 'Wie viel kostet ein Auftritt?',
      content: 'Preise variieren je nach Dauer und Ort.'
    },
    {
      title: 'Spielt ihr auch im Ausland?',
      content: 'Ja, aber zusätzliche Reisekosten fallen an.'
    },
    {
      title: 'Ist eine Anzahlung erforderlich?',
      content: 'Ja, 30% im Voraus.'
    },
    {
      title: 'Wie lange im Voraus sollte man buchen?',
      content: 'Mindestens 3 Monate.'
    },
    {
      title: 'Kann man euch vorher live sehen?',
      content: 'Ja, bei öffentlichen Events möglich.'
    },
    {
      title: 'Habt ihr eine eigene Soundanlage?',
      content: 'Ja, wir bringen unsere eigene Ausrüstung mit.'
    },
    {
      title: 'Spielt ihr auch auf Firmenfeiern?',
      content: 'Ja, wir sind flexibel bei der Art des Events.'
    },
    {
      title: 'Gibt es eine Mindestbuchungsdauer?',
      content: 'Ja, die Mindestbuchungsdauer beträgt 2 Stunden.'
    }
  ];

  // Trackt, welcher Abschnitt geöffnet ist
  openIndex: number | null = null;

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}

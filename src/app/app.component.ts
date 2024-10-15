import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { BandmitgliederComponent } from "./bandmitglieder/bandmitglieder.component";
import { JazzpopliederComponent } from "./jazzpoplieder/jazzpoplieder.component";
import { WeinachtsliederComponent } from "./weinachtslieder/weinachtslieder.component";
import { KontaktComponent } from "./kontakt/kontakt.component";
import { FaqsComponent } from "./faqs/faqs.component";
import { ImpressumComponent } from "./impressum/impressum.component";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    BandmitgliederComponent,
    JazzpopliederComponent,
    WeinachtsliederComponent,
    KontaktComponent,
    FaqsComponent,
    ImpressumComponent,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    './styles/flex.css'
  ]
})
export class AppComponent {
  title = 'nick-and-friends';
}

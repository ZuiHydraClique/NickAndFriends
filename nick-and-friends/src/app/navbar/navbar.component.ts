import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.css',
    '../styles/flex.css'
  ]
})
export class NavbarComponent {

  toBandmitglieder() {
    document.getElementById("bandmitglieder")!.scrollIntoView({behavior:"smooth"})
  }

  toJazzPopLieder() {
    document.getElementById("jazzpoplieder")!.scrollIntoView({behavior:"smooth"})
  }

  toWeihnachtslieder() {
    document.getElementById("weihnachtslieder")!.scrollIntoView({behavior:"smooth"})
  }

  toKontakt() {
    document.getElementById("kontakt")!.scrollIntoView({behavior:"smooth"})
  }

  toFaqs() {
    document.getElementById("faqs")!.scrollIntoView({behavior:"smooth"})
  }

  toImpressum() {
    document.getElementById("impressum")!.scrollIntoView({behavior:"smooth"})
  }

}

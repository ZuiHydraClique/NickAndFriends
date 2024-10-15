import {Component, HostListener} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.css',
    '../styles/flex.css'
  ]
})
export class NavbarComponent {

  isScrolled = false;
  isOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 30;
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

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

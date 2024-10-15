import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './kontakt.component.html',
  styleUrls: [
    './kontakt.component.css',
    '../styles/flex.css'
  ]
})
export class KontaktComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  sendMail() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}

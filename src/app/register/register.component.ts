import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { StrapiService } from "../../services/strapi.service";
import { EntryFieldComponent } from "../entry-field/entry-field.component";
import { ButtonBarComponent } from "../button-bar/button-bar.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    EntryFieldComponent,
    ButtonBarComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username = new FormControl('', Validators.required)
  email = new FormControl('', Validators.required)
  password1 = new FormControl('', Validators.required)
  password2 = new FormControl('', Validators.required)

  constructor(private readonly strapiService: StrapiService) {
  }

  onRegisterClick() {
    const username = this.username.value;
    const email = this.email.value;
    const password1 = this.password1.value;
    const password2 = this.password2.value;
    if (username && email && password1 && password1 == password2) {
      this.strapiService.register(username, email, password1).subscribe(response => {
        localStorage.setItem('strapiToken', response.jwt);
      });
    }
  }
}

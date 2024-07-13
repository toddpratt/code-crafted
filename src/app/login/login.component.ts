import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";

export interface LoginInfo {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Output() login = new EventEmitter<LoginInfo>();
  @Output() close = new EventEmitter();

  username = new FormControl('', Validators.required)
  password = new FormControl('', Validators.required)

  onLoginClick() {
    const username = this.username.value;
    const password = this.password.value;
    if (username && password) {
      this.login.emit({username, password});
    }
  }
}

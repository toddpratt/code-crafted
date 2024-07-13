import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    LoginComponent,
    RouterLink
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

    protected readonly localStorage = localStorage;
}

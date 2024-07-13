import { Routes } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { RegisterComponent } from "./register/register.component";

export const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: '', component: MainComponent}
];

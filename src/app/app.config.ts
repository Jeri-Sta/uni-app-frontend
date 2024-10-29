import { ApplicationConfig } from '@angular/core';
import {provideRouter, Routes} from '@angular/router';
import {LoginComponent} from "./feature/login/login.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
]
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

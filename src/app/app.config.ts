import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, Routes} from '@angular/router';
import {LoginComponent} from "./feature/login/login.component";
import {RegisterComponent} from "./feature/register/register.component";
import {provideAnimations} from "@angular/platform-browser/animations";
import {TranslateModule} from "@ngx-translate/core";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
]
export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes),
      provideAnimations(),
      importProvidersFrom(TranslateModule.forRoot())
  ]
};

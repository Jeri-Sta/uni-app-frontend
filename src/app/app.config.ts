import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, Routes} from '@angular/router';
import {LoginComponent} from "./feature/login/login.component";
import {RegisterComponent} from "./feature/register/register.component";
import {provideAnimations} from "@angular/platform-browser/animations";
import {TranslateModule} from "@ngx-translate/core";
import {PasswordRecoveryComponent} from "./feature/password-recovery/password-recovery.component";
import { ResetPasswordComponent } from './feature/password-recovery/reset-password/reset-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recovery', component: PasswordRecoveryComponent },
  { path: 'reset-password', component: ResetPasswordComponent }
]
export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes),
      provideAnimations(),
      importProvidersFrom(TranslateModule.forRoot())
  ]
};

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(protected router: Router) {}

  protected goRegister(): void {
    this.router.navigate(['/register']);
  }

  protected goRecovery(): void {
    this.router.navigate(['/recovery']);
  }
}

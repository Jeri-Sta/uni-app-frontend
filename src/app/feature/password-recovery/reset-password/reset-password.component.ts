import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
})
export class ResetPasswordComponent implements OnInit {
  protected formGroup!: FormGroup;
  protected isLoading: boolean = false;
  protected success: boolean = false;
  protected successMessage: Message[] = [
    {
      severity: 'success',
      detail: 'Senha alterada com sucesso.',
      icon: 'none',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      password: new FormControl(undefined, [Validators.required]),
      passwordConfirm: new FormControl(undefined, [Validators.required]),
    });
  }

  protected onSave(): void {
    this.formGroup.disable();
    this.isLoading = true;
    this.delay(2000).then((r) => {
      this.success = true;
      this.isLoading = false;
      this.formGroup.enable();
    });
  }

  async delay(ms: number) {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), ms)).then(
      () => console.log('fired')
    );
  }

  protected goToLogin(): void {
    this.router.navigate(['/login']);
  }
}

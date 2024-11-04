import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  protected formGroup!: FormGroup;
  protected success: boolean = false;
  protected isLoading: boolean = false;
  protected successMessage: Message[] = [
    {
      severity: 'success',
      detail: 'Conta criada com sucesso.',
      icon: 'none',
    },
  ];

  constructor(
    private router: Router,
    private location: Location,
    private messageService: MessageService
  ) {}

  date: Date | undefined;
  data: Date | undefined;

  ngOnInit() {
    this.formGroup = new FormGroup({
      username: new FormControl(undefined, Validators.required),
      email: new FormControl(undefined, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(undefined, Validators.required),
      birthDate: new FormControl(undefined, Validators.required),
    });
  }

  protected goBack(): void {
    this.location.back();
  }

  protected onRegister(): void {
    this.formGroup.disable();
    this.isLoading = true;
    this.delay(2000).then((r) => {
      this.success = true;
      this.isLoading = false;
      this.formGroup.enable();
    });
  }

  protected goToLogin(): void {
    this.router.navigate(['/login']);
  }

  async delay(ms: number) {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), ms)).then(
      () => console.log('fired')
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrl: './password-recovery.component.css',
})
export class PasswordRecoveryComponent implements OnInit {
  protected formGroup!: FormGroup;
  protected isLoading: boolean = false;
  protected message: Message[] = [
    {
      key: 'info',
      severity: 'info',
      detail: "Verifique seu e-mail e clique em 'confirmar troca de senha'.",
      icon: 'none',
    },
  ];

  constructor(
    private location: Location,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      email: new FormControl(undefined, [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  protected goBack(): void {
    this.location.back();
  }

  protected onSend(): void {
    this.formGroup.disable();
    this.isLoading = true;
    this.delay(2000).then((r) => {
      this.isLoading = false;
      this.formGroup.enable();
    });
  }

  async delay(ms: number) {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), ms)).then(
      () => console.log('fired')
    );
  }
}

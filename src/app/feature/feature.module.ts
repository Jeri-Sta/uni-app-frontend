import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';
import { MessageService, PrimeTemplate } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { RegisterComponent } from './register/register.component';
import { CalendarModule } from 'primeng/calendar';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { UtilsModule } from '../utils/utils.module';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    PrimeTemplate,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    SidebarModule,
    ToolbarModule,
    NgOptimizedImage,
    TooltipModule,
    PanelModule,
    ToastModule,
    TableModule,
    CalendarModule,
    NgxMaskDirective,
    MessageModule,
    MessagesModule,
    UtilsModule,
  ],
  declarations: [LoginComponent, RegisterComponent, PasswordRecoveryComponent],
  exports: [],
  providers: [provideNgxMask(), MessageService],
})
export class FeatureModule {}

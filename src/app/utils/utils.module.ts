import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { Ripple, RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MenuComponent],
  imports: [
    CommonModule,
    NgOptimizedImage,
    SidebarModule,
    ButtonModule,
    RippleModule,
    StyleClassModule,
  ],
  providers: [],
  exports: [HeaderComponent, FooterComponent, MenuComponent],
})
export class UtilsModule {}

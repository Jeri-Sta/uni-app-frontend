import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from '../../utils/menu/menu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @ViewChild(MenuComponent)
  protected menuComponent!: MenuComponent;

  protected openSidebar() {
    this.menuComponent.visible = true;
    console.log('teste');
  }
}

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  animations: [
    trigger('submenuAnimation', [
      state(
        'hidden',
        style({
          height: '0',
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      transition('hidden <=> visible', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class MenuComponent {
  public visible: boolean = false;
  isSubmenuOpen: boolean = false;

  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }
}

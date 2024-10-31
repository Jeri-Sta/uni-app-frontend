import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private router: Router, private location:  Location) {
  }

  date: Date | undefined
  data: Date | undefined;

  protected goBack(): void {
    this.location.back();
  }
}

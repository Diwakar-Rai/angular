import { NgIf, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

type User = 'user' | 'admin' | 'publisher';
@Component({
  selector: 'app-structuraldirective',
  imports: [NgIf, NgClass, NgStyle],
  templateUrl: './structuraldirective.html',
  styleUrl: './structuraldirective.css',
})
export class Structuraldirective {
  typeOfUser: User = 'publisher';
  isLoggedIn: boolean = false;
  handleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}

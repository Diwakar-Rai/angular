import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structuraldirective',
  imports: [NgIf],
  templateUrl: './structuraldirective.html',
  styleUrl: './structuraldirective.css',
})
export class Structuraldirective {
  isLoggedIn: boolean = false;
  handleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}

import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attributdirective',
  imports: [NgClass, NgStyle],
  templateUrl: './attributdirective.html',
  styleUrl: './attributdirective.css',
})
export class Attributdirective {
  error: boolean = false;

  containerStyle: Partial<CSSStyleDeclaration> = {
    border: '2px solid green',
    background: this.error ? 'red' : 'green',
    display: 'flex',
  };

  dynamicClass: string = 'success para';

  imageSrc: string =
    'https://images.unsplash.com/photo-1766422646104-49661299db4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8';
  changeStatus(c: string) {
    this.error = !this.error;
    // this.dynamicClass = c;
  }
}

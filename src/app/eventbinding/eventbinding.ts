import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  imports: [],
  templateUrl: './eventbinding.html',
  styleUrl: './eventbinding.css',
})
export class Eventbinding {
  name: string = '';
  imgSize: number[] = [100, 200];
  display: boolean = false;
  inputName: string = '';
  img: string =
    'https://images.unsplash.com/photo-1765871321198-30fffc41e605?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8';
  showAlert(arg: string) {
    this.name = arg;
  }

  displaySection() {
    this.display = !this.display;
  }

  handleAlert() {
    alert('You entered the button');
  }

  handleInput(name: string) {
    this.inputName = name;
  }
}

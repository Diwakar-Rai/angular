import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twowaybinding',
  imports: [FormsModule],
  templateUrl: './twowaybinding.html',
  styleUrl: './twowaybinding.css',
})
export class Twowaybinding {
  name: string = 'TYSS';

  handleInput(name: string) {
    this.name = name;
  }
}

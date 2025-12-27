import { Component } from '@angular/core';

@Component({
  selector: 'app-temref',
  imports: [],
  templateUrl: './temref.html',
  styleUrl: './temref.css',
})
export class Temref {
  handleelement(ele: Element) {
    console.dir(ele);
  }

  handleAudio(ele: Element) {
    console.dir(ele);
  }

  handleBackground() {
    document.body.style.background = 'red';
  }
}

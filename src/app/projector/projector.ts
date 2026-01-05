import { Component } from '@angular/core';
import { Childprojection } from './childprojection/childprojection';

@Component({
  selector: 'app-projector',
  imports: [Childprojection],
  templateUrl: './projector.html',
  styleUrl: './projector.css',
})
export class Projector {
  favouriteActress: string = 'Alia Bhatt';

  handlePara(ele: HTMLElement) {
    console.log(ele);
  }
}

import { Component } from '@angular/core';
import { LifeCycle } from '../life-cycle/life-cycle';

@Component({
  selector: 'app-parent-life-cycle',
  imports: [LifeCycle],
  templateUrl: './parent-life-cycle.html',
  styleUrl: './parent-life-cycle.css',
})
export class ParentLifeCycle {
  countValue: number = 10;
  display: boolean = false;

  increment() {
    this.countValue++;
  }

  handleDisplay() {
    this.display = !this.display;
  }
}

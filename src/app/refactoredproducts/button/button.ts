import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { Display } from '../../../types/product-types';
@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input()
  buttonText: string = 'table';
  @Input()
  classes: string = '';
  @Input()
  displayType: string = 'cards';

  @Output()
  emitDisplayType: EventEmitter<string> = new EventEmitter();

  handleClick() {
    this.emitDisplayType.emit(this.buttonText);
  }
}

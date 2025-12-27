import { Component, TemplateRef } from '@angular/core';
import { Eventbinding } from './eventbinding/eventbinding';
import { Twowaybinding } from './twowaybinding/twowaybinding';
import { Attributdirective } from './directive/attributdirective/attributdirective';
import { Structuraldirective } from './directive/structuraldirective/structuraldirective';
import { Switch } from './directive/switch/switch';
import { Loop } from './directive/loop/loop';
import { Products } from './products/products';
import { Parent as ProductParent } from './refactoredproducts/parent/parent';
import { Parent } from './communication/parent/parent';
import { Temref } from './templatereference/temref/temref';

@Component({
  selector: 'app-root',
  imports: [Parent, ProductParent, Temref],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  imagePath: string = '/assets/images/javascript.jpg';
  alt: string = 'My Image';
  imageVisibility: boolean = false;
  image: string =
    'https://images.unsplash.com/photo-1765470440250-fff94ecc23cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8';

  inputVal: string = 'Diwakar';

  display() {
    this.imageVisibility = !this.imageVisibility;
  }

  handleChildElements(arg: any) {
    console.log(arg);
  }
}

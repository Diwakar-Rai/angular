import { Component, Input } from '@angular/core';
import { ProductType } from '../../../types/product-types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cards',
  imports: [NgClass],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
  @Input()
  productList: ProductType[] = [];
}

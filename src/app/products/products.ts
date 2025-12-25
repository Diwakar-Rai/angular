import { Component } from '@angular/core';
import { Header } from '../shared/header/header';
import { Display } from '../../types/product-types';
import { ProductType } from '../../types/product-types';
import productData from '../../utils/data.json';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [Header, NgClass],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  displayType: Display = 'cards';
  productsList: ProductType[] = productData;

  displayList = this.productsList;

  category: string = '';

  handleCategory(c: Event) {
    let ele = c.target! as HTMLInputElement;
    this.category = ele.value;
    this.displayList = this.displayList = this.productsList.filter(
      (ele) => ele.category == this.category
    );
  }

  handleDisplay(type: Display) {
    this.displayType = type;
  }
}

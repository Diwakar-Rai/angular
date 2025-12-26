import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { NgClass } from '@angular/common';
import { Display, ProductType } from '../../../types/product-types';
import productData from '../../../utils/data.json';
@Component({
  selector: 'app-parent',
  imports: [Header, NgClass],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  displayType: Display = 'cards';
  productsList: ProductType[] = productData;

  displayList = this.productsList;
}

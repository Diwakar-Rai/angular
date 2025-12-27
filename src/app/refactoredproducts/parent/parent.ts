import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { NgClass } from '@angular/common';
import { Display, ProductType } from '../../../types/product-types';
import productData from '../../../utils/data.json';
import { Table } from '../table/table';
import { Cards } from '../cards/cards';
import { Details } from '../details/details';
import { Button } from '../button/button';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-refactored',
  imports: [Header, Table, Cards, Details, Button, FormsModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  displayType: Display = 'table';
  productsList: ProductType[] = productData;

  displayList = this.productsList;

  searchText: string = '';

  handleDisplay(type: string) {
    this.displayType = type.toLowerCase() as Display;
  }

  handleSearch() {
    this.displayList = this.productsList.filter((ele) => ele.title.includes(this.searchText));
  }

  handleWithRef(val: string) {
    this.displayList = this.productsList.filter((ele) => ele.title.includes(val));
  }
}

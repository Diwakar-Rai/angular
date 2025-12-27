import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { ProductType } from '../../../types/product-types';

@Component({
  selector: 'app-table',
  imports: [NgClass],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  @Input() productList: ProductType[] = [];
}

import { Component, Input } from '@angular/core';
import { ProductType } from '../../../types/product-types';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  @Input()
  productList: ProductType[] = [];
}

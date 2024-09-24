import { Component, effect, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsdetailStateService } from '../../data-access/productsdetail-state.service';
import { CurrencyPipe } from '@angular/common';
import { CartstateService } from '../../data-access/cartstate.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export default class ProductDetailComponent {
  // private activatedRoute = inject(ActivatedRoute);
  // constructor() {
  //   this.activatedRoute.params.subscribe((params) => {
  //     console.log('el parametro es ', params);
  //   });
  // }
  productDetailState = inject(ProductsdetailStateService).state;
  cartState = inject(CartstateService).state;
  id = input.required<string>();
  constructor() {
    effect(() => {
      this.productDetailState.getById(this.id());
    });
  }

  addToCart() {
    this.cartState.add({
      product: this.productDetailState.products()!,
      quantity: 1,
    });
  }
}

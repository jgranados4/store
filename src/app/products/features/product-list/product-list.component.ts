import { Component, inject } from '@angular/core';
import { ProductsStateService } from '../../data-access/products-state.service';
import { ProductsCardComponent } from '../../ui/products-card/products-card.component';
import { CartstateService } from '../../data-access/cartstate.service';
import { Product } from '../../../products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductsCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export default class ProductListComponent {
  producState = inject(ProductsStateService);
  cartState = inject(CartstateService).state;

  constructor() {}
  changePage() {
    const page = this.producState.state.page() + 1;
    this.producState.changePage$.next(page);
  }
  addToCart(product: Product) {
    this.cartState.add({
      product,
      quantity: 1,
    });
  }
}

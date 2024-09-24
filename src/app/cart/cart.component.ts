import { Component, inject } from '@angular/core';
import { CartItemComponent } from './ui/cart-item/cart-item.component';
import { CartstateService } from '../products/data-access/cartstate.service';
import { CurrencyPipe } from '@angular/common';
import { ProductItemCart } from '../products';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CurrencyPipe],
  templateUrl: './cart.component.html',
  styles: ``,
})
export default class CartComponent {
  state = inject(CartstateService).state;
  onRemove(id: number) {
    this.state.remove(id);
  }
  onDecrease(product: ProductItemCart) {
    this.state.update({
      ...product,
      quantity: product.quantity - 1,
    });
  }
  onIncrease(product: ProductItemCart) {
    this.state.update({
      product: product.product,
      quantity: product.quantity + 1,
    });
  }
}

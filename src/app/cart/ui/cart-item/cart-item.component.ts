import { Component, input, output } from '@angular/core';
import { ProductItemCart } from '../../../products';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  productCartItem = input.required<ProductItemCart>();

  onRemove = output<number>();
  onIncrease = output<ProductItemCart>();
  onDecrease = output<ProductItemCart>();
}

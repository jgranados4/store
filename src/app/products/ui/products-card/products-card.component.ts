import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../products';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.css',
})
export class ProductsCardComponent {
  product = input.required<Product>();
  addCart = output<Product>();
  add(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.addCart.emit(this.product());
  }
}

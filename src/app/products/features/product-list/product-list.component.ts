import { Component, inject } from '@angular/core';
import { ProductsStateService } from '../../data-access/products-state.service';
import { ProductsCardComponent } from '../../ui/products-card/products-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductsCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export default class ProductListComponent {
  producState = inject(ProductsStateService);

  constructor() {}
  changePage() {
    const page = this.producState.state.page() + 1;
    this.producState.changePage$.next(page);
  }
}

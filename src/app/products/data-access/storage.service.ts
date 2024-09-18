import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, ProductItemCart } from '../../products';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  loadProduct(): Observable<ProductItemCart[]> {
    const rawProduct = localStorage.getItem('products');
    return of(rawProduct ? JSON.parse(rawProduct) : []);
  }

  saveProducts(product: ProductItemCart[]): void {
    localStorage.setItem('product', JSON.stringify(product));
  }
}

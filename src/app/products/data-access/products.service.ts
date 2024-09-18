import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Product } from '../../products';

const LIMIT = 5;
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);
  private readonly api = environment.apiUrl;

  constructor() {}

  getProduts(page: number): Observable<Product[]> {
    return this.http.get<any[]>(`${this.api}/products`, {
      params: {
        limit: page * LIMIT,
      },
    });
  }
  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.api}/products/${id}`);
  }
}

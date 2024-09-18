import { inject, Injectable } from '@angular/core';
import { Product } from '../../products';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from './products.service';
import {
  catchError,
  map,
  Observable,
  of,
  startWith,
  Subject,
  switchMap,
} from 'rxjs';
interface state {
  products: Product | null;
  status: cargar;
  page: number;
}
type cargar = 'loading' | 'success' | 'error';

@Injectable({
  providedIn: 'root',
})
export class ProductsdetailStateService {
  private ProductsService = inject(ProductsService);

  private initialState: state = {
    products: null,
    status: 'loading' as const,
    page: 1,
  };

  state = signalSlice({
    initialState: this.initialState,
    actionSources: {
      getById: (_state, $: Observable<string>) =>
        $.pipe(
          switchMap((id) => this.ProductsService.getProduct(id)),
          map((data) => ({ products: data, status: 'success' as const }))
        ),
    },
  });

  constructor() {}
}

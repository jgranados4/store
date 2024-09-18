import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../../products';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from './products.service';
import { catchError, map, of, startWith, Subject, switchMap } from 'rxjs';
interface state {
  products: Product[];
  status: cargar;
  page: number;
}
type cargar = 'loading' | 'success' | 'error';

@Injectable({
  providedIn: 'root',
})
export class ProductsStateService {
  private ProductsService = inject(ProductsService);

  private initialState: state = {
    products: [],
    status: 'loading' as const,
    page: 1,
  };

  //Cambio de pagina
  changePage$ = new Subject<number>();
  loadProduct$ = this.changePage$.pipe(
    startWith(1),
    switchMap((page) => this.ProductsService.getProduts(page)),
    map((products) => ({
      products,
      status: 'success' as const,
    })),
    catchError(()=>{
      return of({
        products:[],
        status:'error' as const,
      })
    })
  );
  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.changePage$.pipe(
        map((page) => ({ page, status: 'loading' as const }))
      ),
      this.loadProduct$,
    ],
  });

  constructor() {}
}

import { inject, Injectable } from '@angular/core';
import { ProductItemCart } from '../../products';
import { signalSlice } from 'ngxtension/signal-slice';
import { StorageService } from './storage.service';
import { map } from 'rxjs';
interface state {
  products: ProductItemCart[];
  loaded: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CartstateService {
  private StorageService = inject(StorageService);
  constructor() {}
  private initialState: state = {
    products: [],
    loaded: false,
  };

  loadProduct$ = this.StorageService.loadProduct().pipe(
    map((products) => ({
      products,
      loaded: true,
    }))
  );
  state = signalSlice({
    initialState: this.initialState,
    sources: [this.loadProduct$],
    effects: (state) => ({
      load: () => {
        console.log('este es el estado', state.products());
      },
    }),
  });
}

import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('../features/product-list/product-list.component'),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('../features/product-detail/product-detail.component'),
  },
] as Routes;

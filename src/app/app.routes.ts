import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./products/features/product.routes'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

import { Route } from '@angular/router';

export default [
  {
    path: ':traffic',
    loadComponent: () => import('./light-traffic.component').then(component => component.LightTrafficComponent),
  },
  {
    path: '',
    loadComponent: () => import('./light-traffic.component').then(component => component.LightTrafficComponent),
    pathMatch: 'full',
  },
] as Route[];

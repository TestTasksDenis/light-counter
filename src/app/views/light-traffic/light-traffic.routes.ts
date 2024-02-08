import { Route } from '@angular/router';
import { TrafficService } from '@services/traffic/traffic.service';

export default [
  {
    path: '',
    loadComponent: () => import('./light-traffic.component').then(component => component.LightTrafficComponent),
    pathMatch: 'full',
    providers: [TrafficService],
  },
] as Route[];

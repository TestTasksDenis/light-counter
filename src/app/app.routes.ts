import { Routes } from '@angular/router';
import { TrafficService } from '@services/traffic/traffic.service';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/light-traffic/light-traffic.routes'),
    providers: [TrafficService],
  },
];

import { DefaultRouteViewComponent } from './default-route-view';
import { LuffyComponent } from './luffy';
import { ZoroComponent } from './zoro';

export const AppRoutes = [
  { path: '', component: DefaultRouteViewComponent },
  { path: 'luffy', component: LuffyComponent },
  { path: 'zoro', component: ZoroComponent }
];

import { DefaultRouteViewComponent } from './default-route-view';
import { LuffyComponent } from './luffy';
import { ZoroComponent } from './zoro';
// import { GreenBroccoliComponent } from './green-broccoli';
// import { BlueBenleshComponent } from './blue-benlesh';
// import { PurpleLarkinComponent } from './purple-larkin';
// import { PinkEastyComponent } from './pink-easty';
// import { SebmckBaeComponent } from './sebmck-bae';

export const AppRoutes = [
  { path: '', component: DefaultRouteViewComponent },
  { path: 'luffy', component: LuffyComponent },
  { path: 'zoro', component: ZoroComponent },
  // { path: 'green-broccoli', component: GreenBroccoliComponent },
  // { path: 'blue-benlesh', component: BlueBenleshComponent },
  // { path: 'purple-larkin', component: PurpleLarkinComponent },
  // { path: 'pink-easty', component: PinkEastyComponent },
  // { path: 'sebmck-bae', component: SebmckBaeComponent },
];

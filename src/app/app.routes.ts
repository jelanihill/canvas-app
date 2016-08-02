import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { CanvasPadComponent} from './canvas-pad/canvas-pad.component';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'canvas/:id', component: CanvasPadComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

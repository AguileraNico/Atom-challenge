import { Routes } from '@angular/router';
import { LandingComponent } from './core/components/landing/landing.component';
import { App } from './main';

export const ROUTES: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
];

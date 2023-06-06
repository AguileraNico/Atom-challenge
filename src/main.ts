import 'zone.js/dist/zone';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { ROUTES } from './root.routes';
import { HeaderComponent } from './core/components/header/header.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
  test = signal('test');
}

bootstrapApplication(App, {
  providers: [provideRouter(ROUTES)],
});

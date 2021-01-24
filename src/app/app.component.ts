import { transition, trigger, style, query, animateChild, group, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-nav-bar></app-nav-bar>
    <div [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>`,
  animations: [
    trigger('routeAnimations', [
      transition('Api <=> Modules', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('0.5s ease-in-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('0.5s ease-in-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild())
      ])
    ])
  ]
})
export class AppComponent {

  public prepareRoute(outlet: RouterOutlet): void {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}

import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class FullscreenService {
  fullscreen$: Observable<boolean>;

  constructor(private router: Router) {
    this.fullscreen$ = this.router.events.pipe(
      filter(event => {
        return event instanceof NavigationEnd;
      }), map((event: NavigationEnd) => {
        const route: any = this.router.config.find(r => {
          return '/' + r.path === event.url.split('?')[0];
        });

        return route && route.fullscreen ? true : false;
      }));
  }

}

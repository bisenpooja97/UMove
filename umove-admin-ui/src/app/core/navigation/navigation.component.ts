import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/authentication/service/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { FullscreenService } from 'src/app/shared/fullscreen.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  title = 'Operational Portal';
  fullscreen$: Observable<boolean>;

  constructor(private fullscreenService: FullscreenService,
              private loginService: AuthenticationService) {

  }

  ngOnInit() {
    this.fullscreen$ = this.fullscreenService.fullscreen$;
  }
}


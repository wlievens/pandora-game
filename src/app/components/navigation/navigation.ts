import {AsyncPipe} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {AuthenticationService, CurrentUser, GameWorldService, WorldGameFull} from '../../../api';
import {LoadedObject} from '../../classes/loaded-object';
import {GovernmentFlagUrlPipe} from '../../pipes/government-flag-url-pipe';

@Component({
  selector: 'pt-navigation',
  imports: [
    AsyncPipe,
    GovernmentFlagUrlPipe,
    MatButton,
    MatToolbar,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class Navigation implements OnInit {
  world$?: LoadedObject<WorldGameFull>;
  self$: Observable<CurrentUser>;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private worldService: GameWorldService,
  ) {
    this.self$ = authenticationService.getSelf()
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url;
        const match = url.match(/^\/worlds\/([^\/]+)/);
        const worldId = match ? match[1] : undefined;
        if (worldId) {
          if (this.world$?.objectSubject.value?.id !== worldId) {
            this.world$ = worldId ? new LoadedObject<WorldGameFull>(() => this.worldService.gameGetWorldById(worldId)) : undefined;
          }
        } else {
          this.world$?.clear();
        }
      });
  }

  onLogin() {
    window.location.href = `${this.authenticationService.configuration.basePath}/login`;
  }
}

import {AsyncPipe} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {ActivatedRoute, Params, RouterLink} from '@angular/router';
import {map, Observable, of} from 'rxjs';
import {GameGovernmentService, GovernmentGameSummary} from '../../../api';
import {FlagUrlPipe} from '../../pipes/flag-url-pipe';

@Component({
  selector: 'pt-nation-list-page',
  imports: [
    AsyncPipe,
    MatButtonModule,
    FlagUrlPipe,
    RouterLink,
  ],
  templateUrl: './nation-list-page.html',
  styleUrl: './nation-list-page.scss'
})
export class NationListPage implements OnInit {
  worldId?: string;
  nations$: Observable<GovernmentGameSummary[]> = of([]);

  constructor(
    private route: ActivatedRoute,
    private governmentService: GameGovernmentService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const worldId = params['worldId'];
      this.worldId = worldId;
      this.nations$ = this.governmentService.gameGetNations(worldId).pipe(
        map(result => result.objects)
      );
    });
  }
}

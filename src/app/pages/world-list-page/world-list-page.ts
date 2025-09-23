import {AsyncPipe, DecimalPipe} from '@angular/common';
import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {RouterLink} from '@angular/router';
import {map, Observable} from 'rxjs';
import {GameWorldService, WorldGameSummary} from '../../../api';

@Component({
  selector: 'pt-world-list-page',
  imports: [
    AsyncPipe,
    DecimalPipe,
    MatButton,
    MatCardModule,
    RouterLink,
  ],
  templateUrl: './world-list-page.html',
  styleUrl: './world-list-page.scss'
})
export class WorldListPage {
  worlds$: Observable<Array<WorldGameSummary>>;

  constructor(
    private worldService: GameWorldService
  ) {
    this.worlds$ = worldService.gameGetWorlds().pipe(
      map(result => result.objects)
    )
  }
}

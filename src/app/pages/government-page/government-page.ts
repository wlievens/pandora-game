import {AsyncPipe} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {ActivatedRoute, Params} from '@angular/router';
import {GameGovernmentService, GovernmentGameFull} from '../../../api';
import {LoadedObject} from '../../classes/loaded-object';
import {Icon} from '../../components/icon/icon';

@Component({
  selector: 'pt-government-page',
  imports: [
    AsyncPipe,
    Icon,
    MatTabsModule,
  ],
  templateUrl: './government-page.html',
  styleUrl: './government-page.scss'
})
export class GovernmentPage implements OnInit {
  worldId?: string;
  government$?: LoadedObject<GovernmentGameFull>;

  constructor(
    private route: ActivatedRoute,
    private governmentService: GameGovernmentService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const worldId = params['worldId'];
      const governmentId = params['governmentId'];
      this.worldId = worldId;
      this.government$ = new LoadedObject<GovernmentGameFull>(() => this.governmentService.gameGetGovernmentById(worldId, governmentId));
    });
  }
}

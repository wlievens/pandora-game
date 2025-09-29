import {AsyncPipe} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {ActivatedRoute, Params} from '@angular/router';
import {GameGovernmentService, GovernmentGameFull} from '../../../api';
import {LoadedObject} from '../../classes/loaded-object';
import {TabGovernmentEconomy} from '../../components/tab-government-economy/tab-government-economy';
import {TabGovernmentExecutive} from '../../components/tab-government-executive/tab-government-executive';
import {TabGovernmentLegislature} from '../../components/tab-government-legislature/tab-government-legislature';
import {TabGovernmentOverview} from '../../components/tab-government-overview/tab-government-overview';
import {TabGovernmentParties} from '../../components/tab-government-parties/tab-government-parties';
import {TabGovernmentTerritories} from '../../components/tab-government-territories/tab-government-territories';
import {GovernmentFlagUrlPipe} from '../../pipes/government-flag-url-pipe';

@Component({
  selector: 'pt-government-page',
  imports: [
    AsyncPipe,
    MatTabsModule,
    TabGovernmentEconomy,
    TabGovernmentExecutive,
    TabGovernmentLegislature,
    TabGovernmentOverview,
    TabGovernmentParties,
    TabGovernmentTerritories,
    GovernmentFlagUrlPipe,
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

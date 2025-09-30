import {AsyncPipe, CommonModule, DecimalPipe, PercentPipe} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {ActivatedRoute, Params, RouterLink} from '@angular/router';
import {BodyType, ElectionGameFull, GameElectionService} from '../../../api';
import {LoadedObject} from '../../classes/loaded-object';
import {ColorBox} from '../../components/color-box/color-box';
import {PortraitUrlPipe} from '../../pipes/portrait-url-pipe';

@Component({
  selector: 'pt-election-page',
  imports: [
    AsyncPipe,
    ColorBox,
    CommonModule,
    DecimalPipe,
    MatExpansionModule,
    PercentPipe,
    RouterLink,
    PortraitUrlPipe,
  ],
  templateUrl: './election-page.html',
  styleUrl: './election-page.scss'
})
export class ElectionPage implements OnInit {
  worldId?: string;
  election$?: LoadedObject<ElectionGameFull>;

  readonly BodyType = BodyType;

  constructor(
    private route: ActivatedRoute,
    private electionService: GameElectionService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const worldId = params['worldId'];
      const electionId = params['electionId'];
      this.worldId = worldId;
      this.election$ = new LoadedObject<ElectionGameFull>(() => this.electionService.gameGetElectionById(worldId, electionId));
    });
  }
}

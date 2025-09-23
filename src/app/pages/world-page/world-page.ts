import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {GameWorldService, WorldGameFull} from '../../../api';
import {LoadedObject} from '../../classes/loaded-object';

@Component({
  selector: 'pt-world-page',
  imports: [],
  templateUrl: './world-page.html',
  styleUrl: './world-page.scss'
})
export class WorldPage implements OnInit {
  world$?: LoadedObject<WorldGameFull>;

  constructor(
    private route: ActivatedRoute,
    private worldService: GameWorldService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.world$ = new LoadedObject<WorldGameFull>(() => this.worldService.gameGetWorldById(params['worldId'])));
  }
}

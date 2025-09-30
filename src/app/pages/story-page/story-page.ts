import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {ActivatedRoute, Params, RouterLink} from '@angular/router';
import {GameStoryService, StoryGameFull} from '../../../api';
import {LoadedObject} from '../../classes/loaded-object';
import {Icon} from '../../components/icon/icon';
import {DecorateTextPipe} from '../../pipes/decorate-text-pipe';
import {GovernmentFlagUrlPipe} from '../../pipes/government-flag-url-pipe';
import {PortraitUrlPipe} from '../../pipes/portrait-url-pipe';

@Component({
  selector: 'pt-story-page',
  imports: [
    AsyncPipe,
    DecorateTextPipe,
    GovernmentFlagUrlPipe,
    Icon,
    MatDividerModule,
    MatListModule,
    PortraitUrlPipe,
    RouterLink,
  ],
  templateUrl: './story-page.html',
  styleUrl: './story-page.scss'
})
export class StoryPage {
  worldId?: string;
  story$?: LoadedObject<StoryGameFull>;

  constructor(
    private route: ActivatedRoute,
    private storyService: GameStoryService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const worldId = params['worldId'];
      const storyId = params['storyId'];
      this.worldId = worldId;
      this.story$ = new LoadedObject<StoryGameFull>(() => this.storyService.gameGetStoryById(worldId, storyId));
    });
  }
}

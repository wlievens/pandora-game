import {JsonPipe} from '@angular/common';
import {Component, Input} from '@angular/core';
import {GovernmentGameFull} from '../../../api';
import {Compass} from '../compass/compass';

@Component({
  selector: 'pt-tab-government-parties',
  imports: [
    JsonPipe,
    Compass,
  ],
  templateUrl: './tab-government-parties.html',
  styleUrl: './tab-government-parties.scss'
})
export class TabGovernmentParties {
  @Input()
  government?: GovernmentGameFull;
}

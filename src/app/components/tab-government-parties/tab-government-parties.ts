import {JsonPipe} from '@angular/common';
import {Component, Input} from '@angular/core';
import {GovernmentGameFull} from '../../../api';

@Component({
  selector: 'pt-tab-government-parties',
  imports: [
    JsonPipe,
  ],
  templateUrl: './tab-government-parties.html',
  styleUrl: './tab-government-parties.scss'
})
export class TabGovernmentParties {
  @Input()
  government?: GovernmentGameFull;
}

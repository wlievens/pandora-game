import {JsonPipe} from '@angular/common';
import {Component, Input} from '@angular/core';
import {GovernmentGameFull} from '../../../api';

@Component({
  selector: 'pt-tab-government-territories',
  imports: [
    JsonPipe,
  ],
  templateUrl: './tab-government-territories.html',
  styleUrl: './tab-government-territories.scss'
})
export class TabGovernmentTerritories {
  @Input()
  government?: GovernmentGameFull;
}

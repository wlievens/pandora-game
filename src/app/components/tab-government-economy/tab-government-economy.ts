import {Component, Input} from '@angular/core';
import {GovernmentGameFull} from '../../../api';
import {TerritoriesEconomy} from '../territories-economy/territories-economy';

@Component({
  selector: 'pt-tab-government-economy',
  imports: [
    TerritoriesEconomy
  ],
  templateUrl: './tab-government-economy.html',
  styleUrl: './tab-government-economy.scss'
})
export class TabGovernmentEconomy {
  @Input()
  government?: GovernmentGameFull;
}

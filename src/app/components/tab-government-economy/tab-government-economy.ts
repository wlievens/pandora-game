import {Component, Input} from '@angular/core';
import {GovernmentGameFull} from '../../../api';

@Component({
  selector: 'pt-tab-government-economy',
  imports: [],
  templateUrl: './tab-government-economy.html',
  styleUrl: './tab-government-economy.scss'
})
export class TabGovernmentEconomy {
  @Input()
  government?: GovernmentGameFull;
}

import {Component, Input} from '@angular/core';
import {GovernmentGameFull} from '../../../api';

@Component({
  selector: 'pt-tab-government-overview',
  imports: [],
  templateUrl: './tab-government-overview.html',
  styleUrl: './tab-government-overview.scss'
})
export class TabGovernmentOverview {
  @Input()
  government?: GovernmentGameFull;
}

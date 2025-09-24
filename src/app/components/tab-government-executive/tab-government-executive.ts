import {Component, Input} from '@angular/core';
import {GovernmentGameFull} from '../../../api';

@Component({
  selector: 'pt-tab-government-executive',
  imports: [],
  templateUrl: './tab-government-executive.html',
  styleUrl: './tab-government-executive.scss'
})
export class TabGovernmentExecutive {
  @Input()
  government?: GovernmentGameFull;
}

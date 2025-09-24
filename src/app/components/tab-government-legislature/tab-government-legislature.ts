import {Component, Input} from '@angular/core';
import {GovernmentGameFull} from '../../../api';
import {HemisphereDiagram} from '../hemisphere-diagram/hemisphere-diagram';

@Component({
  selector: 'pt-tab-government-legislature',
  imports: [
    HemisphereDiagram
  ],
  templateUrl: './tab-government-legislature.html',
  styleUrl: './tab-government-legislature.scss'
})
export class TabGovernmentLegislature {
  @Input()
  government?: GovernmentGameFull;
}

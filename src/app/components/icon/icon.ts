import {Component, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

export const ICON_TABLE = {
  '': 'warning',
  'bill': 'auto_stories',
  'body': 'account_balance',
  'election': 'how_to_vote',
  'map': 'language',
  'office': 'assignment_ind',
  'party': 'stars',
  'person': 'person',
  'territory': 'map',
  'world': 'public',
};

export type IconKey = keyof typeof ICON_TABLE;

@Component({
  selector: 'pt-icon',
  imports: [
    MatIconModule,
  ],
  templateUrl: './icon.html',
  styleUrl: './icon.scss'
})
export class Icon {
  readonly table = ICON_TABLE

  @Input()
  name: IconKey = '';
}

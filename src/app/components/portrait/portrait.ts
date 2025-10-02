import {NgClass} from '@angular/common';
import {Component, Input} from '@angular/core';
import {PartyBase, PersonBase, WorldBase} from '../../../api';
import {PortraitUrlPipe} from '../../pipes/portrait-url-pipe';

@Component({
  selector: 'pt-portrait',
  imports: [
    NgClass,
    PortraitUrlPipe,
  ],
  templateUrl: './portrait.html',
  styleUrl: './portrait.scss'
})
export class Portrait {
  @Input()
  size: 'xs' | 'sm' | 'md' | 'lg' = 'md';

  @Input()
  person?: PersonBase;

  @Input()
  party: PartyBase | undefined | null;

  @Input()
  world?: WorldBase;
}

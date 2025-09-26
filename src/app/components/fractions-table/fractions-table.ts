import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FractionGameFull} from '../../../api';
import {ColorBox} from '../color-box/color-box';

@Component({
  selector: 'pt-fractions-table',
  imports: [
    ColorBox,
  ],
  templateUrl: './fractions-table.html',
  styleUrl: './fractions-table.scss'
})
export class FractionsTable implements OnChanges {
  @Input()
  fractions: FractionGameFull[] = [];

  totalSeats: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if ('fractions' in changes) {
      this.totalSeats = this.fractions.map(fraction => fraction.seats).reduce((a, b) => a + b, 0);
    }
  }
}

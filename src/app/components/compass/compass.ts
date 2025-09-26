import {Component, Input} from '@angular/core';
import {RangePipe} from '../../pipes/range-pipe';

export interface CompassPoint {
  label: string;
  color: string;
  x: number;
  y: number;
}

@Component({
  selector: 'pt-compass',
  imports: [
    RangePipe
  ],
  templateUrl: './compass.html',
  styleUrl: './compass.scss'
})
export class Compass {
  @Input()
  points: CompassPoint[] = [];

  @Input()
  size: number = 200;

  @Input()
  divisions: number = 8;

  @Input()
  labelAxes: boolean = true;

  @Input()
  pointRadiusFactor = 0.04;

  readonly borderColor: string = '#000000';
  readonly minorLineColor: string = '#cccccc';
  readonly majorLineColor: string = '#444444';
  readonly pointOutlineColor: string = '#000000';
  readonly textColor: string = '#000000';
  readonly haloColor: string = 'rgba(255,255,255,0.80)';

  readonly textMarginX = 4;
  readonly textMarginY1 = 12;
  readonly textMarginY2 = 8;
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'pt-color-box',
  imports: [],
  templateUrl: './color-box.html',
  styleUrl: './color-box.scss'
})
export class ColorBox {
  @Input()
  color: string = '#000000';
}

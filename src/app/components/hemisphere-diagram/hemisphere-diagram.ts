import {AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import * as d3 from 'd3';
import * as pc from 'd3-parliament-chart';

export interface HemisphereFraction {
  name: string;
  abbreviation: string;
  color: string;
  seats: number;
}

@Component({
  selector: 'pt-hemisphere-diagram',
  imports: [],
  templateUrl: './hemisphere-diagram.html',
  styleUrl: './hemisphere-diagram.scss'
})
export class HemisphereDiagram implements OnChanges, AfterViewInit {
  @Input()
  fractions: HemisphereFraction[] = [];

  @ViewChild('diagram', {static: true})
  private diagramRef!: ElementRef<SVGSVGElement>;

  ngAfterViewInit(): void {
    this.updateView();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('fractions' in changes) {
      this.updateView();
    }
  }

  private updateView(): void {
    const root = d3.select(this.diagramRef.nativeElement);
    root.selectAll('*').remove();
    root.append('g')
      .call(
        pc.parliamentChart()
          .width(800)
          .aggregatedData([
            {'seats': 40, 'color': '#636cbb'},
            {'seats': 30, 'color': '#26d050'},
            {'seats': 50, 'color': '#315cee'}
          ])
      );
  }
}

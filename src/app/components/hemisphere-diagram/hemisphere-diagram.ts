import {AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import * as d3 from 'd3';
import * as pc from 'd3-parliament-chart';
import {PartyBase} from '../../../api';

export interface HemisphereFraction {
  party: PartyBase;
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
    const data = this.fractions.map(fraction => ({
      seats: fraction.seats,
      color: fraction.party.color
    }));
    const seats = data.map(fraction => fraction.seats).reduce((a, b) => a + b, 0);
    const sections = Math.ceil(seats / 80);
    const seatRadius = Math.ceil(140 / Math.sqrt(seats));
    root.append('g').call(pc.parliamentChart().width(800)
      .aggregatedData(data)
      .sectionGap(30)
      .sections(sections)
      .rowHeight(seatRadius * 3)
      .seatRadius(seatRadius)
      .debug(true)
    );
  }
}

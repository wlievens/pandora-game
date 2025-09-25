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
    root.append('g').call(pc.parliamentChart().width(800).aggregatedData(this.fractions.map(fraction => ({
      seats: fraction.seats,
      color: fraction.party.color
    }))));
  }
}

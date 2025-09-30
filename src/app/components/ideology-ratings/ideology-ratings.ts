import {AsyncPipe} from '@angular/common';
import {Component, Input} from '@angular/core';
import {map, Observable} from 'rxjs';
import {GameSpectrumService, SpectrumGameSummary} from '../../../api';

@Component({
  selector: 'pt-ideology-ratings',
  imports: [
    AsyncPipe
  ],
  templateUrl: './ideology-ratings.html',
  styleUrl: './ideology-ratings.scss'
})
export class IdeologyRatings {
  @Input()
  ratings: { [key: string]: number } = {};

  spectra$: Observable<SpectrumGameSummary[]>;

  constructor(
    private spectrumService: GameSpectrumService,
  ) {
    this.spectra$ = this.spectrumService.gameGetSpectra().pipe(
      map(result => result.objects)
    );
  }
}

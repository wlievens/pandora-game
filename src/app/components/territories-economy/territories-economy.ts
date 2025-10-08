import {Component, Input, OnInit} from '@angular/core';
import {forkJoin} from 'rxjs';
import {GameIndustryService, GameProductService, IndustryGameSummary, ProductGameSummary, TerritoryBase} from '../../../api';
import {SymbolUrlPipe} from '../../pipes/symbol-url-pipe';

@Component({
  selector: 'pt-territories-economy',
  imports: [
    SymbolUrlPipe
  ],
  templateUrl: './territories-economy.html',
  styleUrl: './territories-economy.scss'
})
export class TerritoriesEconomy implements OnInit {
  @Input()
  territories: TerritoryBase[] = [];

  industries: IndustryGameSummary[] = [];
  products: ProductGameSummary[] = [];

  constructor(
    private industryService: GameIndustryService,
    private productService: GameProductService,
  ) {
  }

  ngOnInit(): void {
    forkJoin([
      this.industryService.gameGetIndustries(undefined, undefined, undefined, 100, 0),
      this.productService.gameGetProducts(undefined, undefined, undefined, 100, 0),
    ]).subscribe(([industries, products]) => {
      this.industries = industries.objects;
      this.products = products.objects;
    });
  }
}

import {Component, Input} from '@angular/core';
import { AllergenDetailInterface } from "../../interfaces";

@Component( {
  selector: 'app-allergen-summary',
  templateUrl: './allergen-summary.page.html',
  styleUrls: [ './allergen-summary.page.scss' ],
} )
/*
* Lo mismo que en AllergenFoodPage
* */
export class AllergenSummaryPage {
  @Input() allergen: AllergenDetailInterface;
}

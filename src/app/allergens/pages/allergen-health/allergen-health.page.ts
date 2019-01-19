import {Component, Input} from '@angular/core';
import {AllergenDetailInterface} from "../../interfaces";

@Component( {
  selector: 'app-allergen-health',
  templateUrl: './allergen-health.page.html',
  styleUrls: [ './allergen-health.page.scss' ],
} )
/*
* Lo mismo que en AllergenFoodPage
* */
export class AllergenHealthPage  {
  @Input() allergen: AllergenDetailInterface;
}

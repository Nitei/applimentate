import { Component, OnInit } from '@angular/core';
import { AllergensService } from '../../services/allergens.service';

@Component( {
  selector: 'app-allergen-summary',
  templateUrl: './allergen-summary.page.html',
  styleUrls: [ './allergen-summary.page.scss' ],
} )
export class AllergenSummaryPage implements OnInit {
  allergenName: string;
  srcImgAllergen: string;
  imagesAllergen: object;

  constructor (
    private allergensService: AllergensService,
  ) { }

  ngOnInit() {
    this.allergenName = this.allergensService.aName;
    this.srcImgAllergen = this.allergensService.srcImg;
    this.imagesAllergen = this.allergensService.srcImgNameSummary;
  }
}

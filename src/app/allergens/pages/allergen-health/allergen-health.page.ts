import { Component, OnInit } from '@angular/core';
import { AllergensService } from '../../services/allergens.service';

@Component( {
  selector: 'app-allergen-health',
  templateUrl: './allergen-health.page.html',
  styleUrls: [ './allergen-health.page.scss' ],
} )
export class AllergenHealthPage implements OnInit {
  allergenName: string;
  srcImgAllergen: string;
  imagesAllergen: object;

  constructor (
    private allergensService: AllergensService,
  ) { }

  ngOnInit() {
    this.allergenName = this.allergensService.aName;
    this.srcImgAllergen = this.allergensService.srcImg;
    this.imagesAllergen = this.allergensService.srcImgNameHealth;
  }
}

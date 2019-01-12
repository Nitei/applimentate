import { Component, OnInit } from '@angular/core';
import { AllergensService } from '../../services/allergens.service';

@Component( {
  selector: 'app-allergen-food',
  templateUrl: './allergen-food.page.html',
  styleUrls: [ './allergen-food.page.scss' ],
} )
export class AllergenFoodPage implements OnInit {
  allergenName: string;
  srcImgAllergen: string;
  imagesAllergen: object;

  constructor (
    private allergensService: AllergensService,
  ) { }

  ngOnInit() {
    this.allergenName = this.allergensService.aName;
    this.srcImgAllergen = this.allergensService.srcImg;
    this.imagesAllergen = this.allergensService.srcImgNameFood;
  }
}

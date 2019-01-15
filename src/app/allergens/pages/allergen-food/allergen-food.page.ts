import { Component, OnInit } from '@angular/core';
import { AllergensService } from '../../services/allergens.service';
import { ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'app-allergen-food',
  templateUrl: './allergen-food.page.html',
  styleUrls: [ './allergen-food.page.scss' ],
} )
export class AllergenFoodPage implements OnInit {
  allergenId: string; // Ejemplo: 'ALLERGENS.LUPINS'
  allergenName: string; // 'LUPINS'
  srcImgAllergen: string;
  extensionImagesAllergen: object;

  constructor (
    private route: ActivatedRoute,
    private allergensService: AllergensService,
  ) { }

  ngOnInit() {
    this.allergenId = this.route.snapshot.parent.params.id;
    this.allergenName = this.allergenId.slice( this.allergenId.indexOf( '.' ) + 1 );
    this.srcImgAllergen = this.allergensService.srcImg;
    this.extensionImagesAllergen = this.allergensService.srcImgNameFood;
  }
}

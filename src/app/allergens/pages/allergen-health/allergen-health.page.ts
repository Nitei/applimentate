import { Component, OnInit } from '@angular/core';
import { AllergensService } from '../../services/allergens.service';
import { ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'app-allergen-health',
  templateUrl: './allergen-health.page.html',
  styleUrls: [ './allergen-health.page.scss' ],
} )
export class AllergenHealthPage implements OnInit {
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
    this.extensionImagesAllergen = this.allergensService.srcImgNameHealth;
  }
}

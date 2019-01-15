import { Component, OnInit } from '@angular/core';
import { AllergensService } from '../../services/allergens.service';
import { ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'app-allergen-summary',
  templateUrl: './allergen-summary.page.html',
  styleUrls: [ './allergen-summary.page.scss' ],
} )
export class AllergenSummaryPage implements OnInit {
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
    this.extensionImagesAllergen = this.allergensService.srcImgNameSummary;
  }
}

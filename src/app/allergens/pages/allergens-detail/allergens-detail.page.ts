import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AllergensService } from '../../services/allergens.service';

@Component( {
  selector: 'app-allergens-details',
  templateUrl: './allergens-detail.page.html',
  styleUrls: [ './allergens-detail.page.scss' ],
} )
export class AllergensDetailPage implements OnInit {
  allergenId: string; // Ejemplo: 'ALLERGENS.LUPINS'
  allergenName: string; // 'LUPINS'
  srcImgAllergen: string;
  numberBadgeSummary: number;
  numberBadgeHealth: number;
  numberBadgeFood: number;

  constructor (
    private route: ActivatedRoute,
    private allergensService: AllergensService,
  ) { }

  ngOnInit() {
    this.allergenId = this.route.snapshot.params.id;
    this.allergenName = this.allergenId.slice( this.allergenId.indexOf( '.' ) + 1 );
    this.numberBadgeSummary = this.allergensService.srcImgNameSummary.length;
    this.numberBadgeHealth = this.allergensService.srcImgNameHealth.length;
    this.numberBadgeFood = this.allergensService.srcImgNameFood.length;
  }
}

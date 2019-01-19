import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AllergensService } from '../../services/allergens.service';
import { AllergenDetailInterface } from "../../interfaces";

@Component( {
  selector: 'app-allergens-details',
  templateUrl: './allergens-detail.page.html',
  styleUrls: [ './allergens-detail.page.scss' ],
} )
export class AllergensDetailPage implements OnInit {
  allergen: AllergenDetailInterface;

  constructor (
    private route: ActivatedRoute,
    private allergensService: AllergensService,
  ) { }

  ngOnInit() {
    this.allergen = this.allergensService.getAllergenById(this.route.snapshot.params.id );
    /*
    * Los badges no los necesitamos... aún. Ya llegaremos cuando metamos
    * notificaciones Push ;)
    * */
    /*this.numberBadgeSummary = this.allergensService.srcImgNameSummary.length;
    this.numberBadgeHealth = this.allergensService.srcImgNameHealth.length;
    this.numberBadgeFood = this.allergensService.srcImgNameFood.length;*/
  }
}

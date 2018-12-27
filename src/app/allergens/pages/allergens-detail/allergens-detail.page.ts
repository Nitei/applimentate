import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllergensService } from '../../services';
import { AllergenDetailInterface } from '../../interfaces';


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
  ) {
  }

  ngOnInit() {
    this.allergen = this.allergensService.getAllergenById( this.route.snapshot.params[ 'id' ] );
  }
}

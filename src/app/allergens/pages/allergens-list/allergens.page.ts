import { AllergensService } from '../../services/allergens.service';
import { Component, OnInit } from '@angular/core';
import { AllergenInterface } from '../../interfaces/allergen.interface';

@Component( {
    selector: 'app-allergens',
    templateUrl: 'allergens.page.html',
    styleUrls: [ 'allergens.page.scss' ]
} )
export class AllergensPage implements OnInit {
    allergens: AllergenInterface[];

    constructor ( private allergensServie: AllergensService ) { }

    ngOnInit(): void {
        this.allergens = this.allergensServie.getList();
    }
}

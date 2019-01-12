import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergenFoodPage } from './allergen-food.page';

describe( 'AllergenFoodPage', () => {
    let component: AllergenFoodPage;
    let fixture: ComponentFixture<AllergenFoodPage>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            declarations: [ AllergenFoodPage ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( AllergenFoodPage );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );

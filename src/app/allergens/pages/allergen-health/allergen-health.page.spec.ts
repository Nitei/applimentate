import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergenHealthPage } from './allergen-health.page';

describe( 'AllergenHealthPage', () => {
    let component: AllergenHealthPage;
    let fixture: ComponentFixture<AllergenHealthPage>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            declarations: [ AllergenHealthPage ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( AllergenHealthPage );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';


import { TranslateModule } from '@ngx-translate/core';
import { routes } from '../../allergens.module';
import { AllergensPage } from '../allergens-list/allergens.page';
import { AllergensDetailPage } from '../allergens-detail/allergens-detail.page';
import { AllergenSummaryPage } from '../allergen-summary/allergen-summary.page';
import { AllergenHealthPage } from '../allergen-health/allergen-health.page';
import { AllergenFoodPage } from '../allergen-food/allergen-food.page';

describe( 'AllergenSummaryPage', () => {
    let component: AllergenSummaryPage;
    let fixture: ComponentFixture<AllergenSummaryPage>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            declarations: [
                AllergensPage,
                AllergensDetailPage,
                AllergenSummaryPage,
                AllergenHealthPage,
                AllergenFoodPage
            ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
            imports: [
                RouterTestingModule.withRoutes( routes ),
                TranslateModule.forRoot( {} )
            ],
            providers: [ {
                provide: ActivatedRoute, useValue: {
                    snapshot: {
                        parent: {
                            params: { id: 'ALLERGENS.LUPINS' },
                        }
                    }
                }
            }
            ],
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( AllergenSummaryPage );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
    it( 'extensionImagesAllergen is an array of extensions like "_S01, _S02, ..."', () => {
        const extensionStack = component.extensionImagesAllergen;

        for ( let i = 0; i < extensionStack.length; i++ ) {
            expect( extensionStack[ i ] ).toBe( '_S0' + [ i + 1 ] );
        }
    } );
    it( 'extensionImagesAllergen length is 3', () => {
        expect( component.extensionImagesAllergen.length ).toBe( 3 );
    } );
} );

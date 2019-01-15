import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';


import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { routes } from '../../allergens.module';
import { AllergensPage } from '../allergens-list/allergens.page';
import { AllergensDetailPage } from '../allergens-detail/allergens-detail.page';
import { AllergenSummaryPage } from '../allergen-summary/allergen-summary.page';
import { AllergenHealthPage } from '../allergen-health/allergen-health.page';
import { AllergenFoodPage } from '../allergen-food/allergen-food.page';

describe( 'AllergenFoodPage', () => {
    let component: AllergenHealthPage;
    let fixture: ComponentFixture<AllergenHealthPage>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            declarations: [
                AllergensPage,
                AllergensDetailPage,
                AllergenSummaryPage,
                AllergenHealthPage,
                AllergenFoodPage
            ],
            schemas: [ NO_ERRORS_SCHEMA ],
            imports: [
                RouterTestingModule.withRoutes( routes ),
                TranslateModule.forRoot( {} )
            ],
            providers: [ TranslateService,
                {
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
        fixture = TestBed.createComponent( AllergenHealthPage );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );

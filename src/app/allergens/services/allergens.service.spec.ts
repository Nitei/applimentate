import { TestBed } from '@angular/core/testing';
import { TranslateModule } from "@ngx-translate/core";

import { AllergensService } from './allergens.service';
import {AllergenDetailInterface} from "../interfaces";

describe( 'AllergensService', () => {
    beforeEach( () => TestBed.configureTestingModule( {
        imports: [TranslateModule.forRoot()]
    } ) );

    it( 'should be created', () => {
        const service: AllergensService = TestBed.get( AllergensService );
        expect( service ).toBeTruthy();
    } );
    it( 'should return a fourteen elements list', () => {
        const service: AllergensService = TestBed.get( AllergensService ),
            allergensList = service.getList();
        expect( allergensList.length ).toBe( 14 );
    } );
    it( 'should return the correct path and filename of each allergen icon', () => {
        const service: AllergensService = TestBed.get( AllergensService );
        const allergensName: string[] = [ 'lupins', 'celery', 'peanuts', 'crustaceans', 'sulfur_dioxide_and_sulphites', 'nuts',
            'gluten', 'sesame_seeds', 'egg', 'dairy_products', 'molluscs', 'mustard', 'fish', 'soy' ],
            allergensList = service.getList(),

            filterFunction = ( allergenItem, expectedFilename ) => allergenItem.icon === `../../../assets/icon/${ expectedFilename }.png`;
        for ( const allergen of allergensName ) {
            expect( allergensList.filter( item => filterFunction( item, allergen ) ).length ).toBe( 1 );
        }
    } );
    it('should return an object with the same "name" than the "id" which is passed as parameter', () => {
        const service: AllergensService = TestBed.get( AllergensService ),
            allergenName: string ='ALLERGENS.GLUTEN',
            allergen: AllergenDetailInterface = service.getAllergenById(allergenName);
        expect(allergen.name).toBe(allergenName);
    });
    it('should return null if the id is not valid', () => {
        const service: AllergensService = TestBed.get( AllergensService ),
            allergenName: string ='HAPPY HOUR!',
            allergen: AllergenDetailInterface = service.getAllergenById(allergenName);
        expect(allergen).toBeNull();
    });
} );

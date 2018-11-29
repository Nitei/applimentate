import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { AllergenDetailInterface, AllergenInterface } from '../interfaces';

@Injectable( {
    providedIn: 'root'
} )
export class AllergensService {

    private allergenList: AllergenInterface[];
    private srcPath = '../../../assets/icon/';
    constructor ( private translateService: TranslateService ) {
        this.allergenList = this.getDefaultAllergenList();
        this.sortAllergenList();
    }

    getList(): AllergenInterface[] {
        return this.allergenList;
    }

    getAllergenById( id: string ): AllergenDetailInterface {
        switch ( id ) {
            case 'ALLERGENS.LUPINS':
            case 'ALLERGENS.CELERY':
            case 'ALLERGENS.PEANUTS':
            case 'ALLERGENS.CRUSTACEANS':
            case 'ALLERGENS.SULFUR_DIOXIDE_AND_SULPHITES':
            case 'ALLERGENS.NUTS':
            case 'ALLERGENS.GLUTEN':
            case 'ALLERGENS.SESAME_SEEDS':
            case 'ALLERGENS.EGG':
            case 'ALLERGENS.DAIRY_PRODUCTS':
            case 'ALLERGENS.MOLLUSCS':
            case 'ALLERGENS.MUSTARD':
            case 'ALLERGENS.FISH':
            case 'ALLERGENS.SOY':
                return {
                    name: id,
                    icon: this.getIconFilename( id ),
                    img: '',
                    summary: this.getSummary( id )
                };
            default: return null;
        }
    }


    private getDefaultAllergenList(): AllergenInterface[] {
        const allergenList: AllergenInterface[] = [
            { name: 'ALLERGENS.LUPINS', icon: '' },
            { name: 'ALLERGENS.CELERY', icon: '' },
            { name: 'ALLERGENS.PEANUTS', icon: '' },
            { name: 'ALLERGENS.CRUSTACEANS', icon: '' },
            { name: 'ALLERGENS.SULFUR_DIOXIDE_AND_SULPHITES', icon: '' },
            { name: 'ALLERGENS.NUTS', icon: '' },
            { name: 'ALLERGENS.GLUTEN', icon: '' },
            { name: 'ALLERGENS.SESAME_SEEDS', icon: '' },
            { name: 'ALLERGENS.EGG', icon: '' },
            { name: 'ALLERGENS.DAIRY_PRODUCTS', icon: '' },
            { name: 'ALLERGENS.MOLLUSCS', icon: '' },
            { name: 'ALLERGENS.MUSTARD', icon: '' },
            { name: 'ALLERGENS.FISH', icon: '' },
            { name: 'ALLERGENS.SOY', icon: '' }
        ];
        for ( const allergen of allergenList ) {
            allergen.icon = this.getIconFilename( allergen.name.split( '.' )[ 1 ] );
        }
        return allergenList;
    }

    private sortAllergenList(): void {
        this.translateService
            .get( this.allergenList.map( item => item.name ) )
            .pipe( take( 1 ) )
            .subscribe( trasnlated => {
                this.allergenList.sort( ( elem1, elem2 ) =>
                    trasnlated[ elem1.name ] < trasnlated[ elem2.name ] ? -1 : trasnlated[ elem1.name ] > trasnlated[ elem2.name ] ? 1 : 0
                );
            } );
    }

    private getIconFilename( allergenName: string ): string {
        return this.srcPath + allergenName
            .toLowerCase()
            + '.png';
    }

    private getSummary( alergeno: string ): string {
        return 'ALLERGENS.SUMMARIES.' + alergeno
            .slice( alergeno
                .lastIndexOf( '.' ) + 1 );
    }
}

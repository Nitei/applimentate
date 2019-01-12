import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { AllergensList } from '../interfaces/allergen.interface';

@Injectable( {
    providedIn: 'root'
} )
export class AllergensService {

    private allergenList: AllergensList[];
    public aName: string;
    private srcIcon = '../../../assets/icon/';
    public srcImg = '../../../assets/img/ImgAllergens/';
    public srcImgNameSummary = [ '_S01', '_S02', '_S03' ];
    public srcImgNameHealth = [ '_H01', '_H02', '_H03' ];
    public srcImgNameFood = [ '_F01', '_F02', '_F03' ];


    private namesList = [
        'LUPINS', 'CELERY', 'PEANUTS', 'CRUSTACEANS', 'SULFUR_DIOXIDE_AND_SULPHITES', 'NUTS',
        'GLUTEN', 'SESAME_SEEDS', 'EGG', 'DAIRY_PRODUCTS', 'MOLLUSCS', 'MUSTARD', 'FISH', 'SOY'
    ];

    constructor ( private translateService: TranslateService ) {
        this.allergenList = this.getDefaultAllergenList();
        this.sortAllergenList();
    }

    getList(): AllergensList[] {
        return this.allergenList;
    }

    getAllergenNameFromParams( data ): string {
        // data = 'ALLERGENS.LUPINS'
        this.aName = data.slice( data.indexOf( '.' ) + 1 );
        // this.aName = 'LUPINS'
        return this.aName;
    }

    private getDefaultAllergenList(): AllergensList[] {
        const allergenListStack = [];

        for ( const Name of this.namesList ) {
            allergenListStack.push( {
                name: 'ALLERGENS.' + Name,
                icon: this.srcIcon + Name.toLowerCase() + '.png'
            } );
        }
        return allergenListStack;
    }

    private sortAllergenList(): void {
        this.translateService
            .get( this.allergenList.map( aName => aName.name ) )
            .pipe( take( 1 ) )
            .subscribe( trasnlated => {
                this.allergenList.sort( ( elem1, elem2 ) =>
                    trasnlated[ elem1.name ] < trasnlated[ elem2.name ] ? -1 : trasnlated[ elem1.name ] > trasnlated[ elem2.name ] ? 1 : 0
                );
            } );
    }
}

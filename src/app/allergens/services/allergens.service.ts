import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { AllergenInterface, AllergenDetailInterface } from '../interfaces';

@Injectable( {
    providedIn: 'root'
} )
export class AllergensService {

    private allergenList: AllergenInterface[];
    /*
    * Cambiar el nombre de un atributo privado lleva poca regresión, en teoría,
     * así que bueno, no está mal que le hayas acortado el nombre
    * */
    private srcIcon = '../../../assets/icon/';
    /*
    * Si éstos atributos son públicos se pueden modificar desde fuera y si lo hacemos
    * podemos volvernos locos buscando dónde (o cuando, si se hace dinámicamente)
    * se han modificado.
    * Ponle tipos a los atributos, que para eso usamos Typescript. Vas a perder pocos segundos
    * y en el futuro lo agradecerás.
    * */
    private aName: string;
    private srcImg: string = '../../../assets/img/ImgAllergens/';
    private srcImgNameSummary: string[] = [ '_S01', '_S02', '_S03' ];
    private srcImgNameHealth: string[] = [ '_H01', '_H02', '_H03' ];
    private srcImgNameFood: string[] = [ '_F01', '_F02', '_F03' ];


    private namesList = [
        'LUPINS', 'CELERY', 'PEANUTS', 'CRUSTACEANS', 'SULFUR_DIOXIDE_AND_SULPHITES', 'NUTS',
        'GLUTEN', 'SESAME_SEEDS', 'EGG', 'DAIRY_PRODUCTS', 'MOLLUSCS', 'MUSTARD', 'FISH', 'SOY'
    ];

    constructor ( private translateService: TranslateService ) {
        this.allergenList = this.getDefaultAllergenList();
        this.sortAllergenList();
    }

    getList(): AllergenInterface[] {
        return this.allergenList;
    }

    /*
    * ¿Por qué has machacado un método PÚBLICO que se estaba utilizando en otros sitios?
    * ¿No te gustaba?
    * */
    getAllergenById( id: string ): AllergenDetailInterface {
        /*
        * Yo ésto lo quitaría y no enviaría el "ALLERGENS." desde fuera
        * */
        id = this.getAllergenNameFromParams(id);
        switch ( id ) {
            /*
            * Ésto lo hemos heredado de antes pero lo suyo es que el ID fuese
            * únicamente lo que se calcula en "getAllergenNameFromParams" (p.e. "EGG")
            * */
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
                    icon: this.getIconFilename( this.getIconFilename(id) ),
                    imgsSummary: this.getSummaryImgs( id ),
                    imgsHealth: this.getHealthImgs( id ),
                    imgsFood: this.getFoodImgs( id ),
                    summary: this.getSummary( id ),
                    food: this.getFood( id ),
                    health: this.getHealth( id )
                };
            default: return null;
        }
    }
    /*
    * Esta función no debería pertenecer a éste servicio,
    * ésto debería hacerse desde el componente/servicio que manejase "ALLERGENS.LUPINS".
    * Éste servicio NO tiene que saber cómo trabajan los otros componentes o servicios
    * salvo en el caso de que el componente o servicio sea una dependencia de éste.
    * */
    getAllergenNameFromParams( data: string ): string {
        // data = 'ALLERGENS.LUPINS'
        this.aName = data.slice( data.indexOf( '.' ) + 1 );
        // this.aName = 'LUPINS'
        return this.aName;
    }

    private getDefaultAllergenList(): AllergenInterface[] {
        const allergenListStack = [];
        /*
        * No es muy buena práctica nombrar variables o constantes con la primera mayúscula.
        * Ésto suele usarse en clases o interfaces
        * */
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

    private getIconFilename( allergenName: string ): string {
        return this.srcIcon + allergenName
                .toLowerCase()
            + '.png';
    }

    private getSummary( allergenID: string ): string {
        return 'ALLERGENS.SUMMARIES.' + allergenID
            .slice( allergenID
                .lastIndexOf( '.' ) + 1 );
    }

    private getFood( allergenID: string ): string {
        return 'ALLERGENS.FOODS.' + allergenID
            .slice( allergenID
                .lastIndexOf( '.' ) + 1 );
    }

    private getHealth( allergenID: string ): string {
        return 'ALLERGENS.HEALTH.' + allergenID
            .slice( allergenID
                .lastIndexOf( '.' ) + 1 );
    }

    /*
    * Éstos 3 métodos, como tienen una funcionalidad igual aunque
    * ligeramente diferente dependiendo del contexto, podríamos
    * hacer un único método que recibiese un segundo parámetro,
    * por ejemplo, "tab", y, en función de éste, devolviese una cosa
    * u otra
    * */
    private getSummaryImgs( allergenID: string ): string[] {
        const imgs: string[] = [];
        this.srcImgNameSummary.map(srcImg => {
            imgs.push(
                this.srcImg +
                /*
                * Llamo a éste método sólo para que funcione. Debería recibir el ID
                * sin el 'ALLERGEN."
                * */
                this.getAllergenNameFromParams(allergenID).toUpperCase() +
                '/' +
                this.getAllergenNameFromParams(allergenID).toUpperCase() +
                srcImg
            )
        });
        return imgs;
    }

    private getFoodImgs( allergenID: string ): string[] {
        const imgs: string[] = [];
        this.srcImgNameFood.map(srcImg => {
            imgs.push(
                this.srcImg +
                this.getAllergenNameFromParams(allergenID).toUpperCase() +
                '/' +
                this.getAllergenNameFromParams(allergenID).toUpperCase() +
                srcImg
            )
        });
        return imgs;
    }

    private getHealthImgs( allergenID: string ): string[] {
        const imgs: string[] = [];
        this.srcImgNameHealth.map(srcImg => {
            imgs.push(
                this.srcImg +
                this.getAllergenNameFromParams(allergenID).toUpperCase() +
                '/' +
                this.getAllergenNameFromParams(allergenID).toUpperCase() +
                srcImg
            )
        });
        return imgs;
    }
}

import { AllergenInterface } from './allergen.interface';

export interface AllergenDetailInterface extends AllergenInterface {
    /*
    * Como ahora vamos a tener una lista, modificamos el atributo. Esto implica regresión
    * pero bueno, es la funcionalidad nueva que vamos a añadir, tenemos que hacerlo sí o sí
    * imgSummary: string --> imgsSummary: string[].
    * Y como sabemos que (o al menos por ahora) vamos a poner más, añadimos lo que nos haga falta.
    * Ésto no romperá nada, en teoría. Yo hubiese hecho cuatro interfaces:
    * - AllergenDetailTabInterface: {text: string, images: string[]}
    * - AllergenDetailSummary extends AllergenDetailTabInterface
    * - AllergenDetailFood extends AllergenDetailTabInterface
    * - AllergenDetailHealth extends AllergenDetailTabInterface
    * pero bueno, por ahora sólo con una no va a arder troya...
    * También es buena política agrupar por funcionalidad, ordenar por tamaño, orden alfabético...
    * */
    food: string;
    imgsFood: string[];
    health: string;
    imgsHealth: string[];
    summary: string;
    imgsSummary: string[];
}

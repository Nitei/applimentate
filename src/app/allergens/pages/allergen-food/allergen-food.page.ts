import {Component, Input} from '@angular/core';
import { AllergenDetailInterface } from "../../interfaces";

@Component( {
  selector: 'app-allergen-food',
  templateUrl: './allergen-food.page.html',
  styleUrls: [ './allergen-food.page.scss' ],
} )
/*
* Yo a éste componente le hubiese llamado AllergenFoodTab/Content  en lugar de
* AllergenFoodPage pero bueno, no está mal, se pueden plantear muchísimas
* soluciones, todas ellas muy correctas... Yo voy a optar por hacerlo relativo
* a un contexto externo, el del detalle, y no a uno propio. Es decir, entre cosas,
* para el usuario no será necesario cambiar de URL para ir a cada una de las tabs
* */
export class AllergenFoodPage {
  /*
  * https://angular.io/api/core/Input
  * */
  @Input() allergen: AllergenDetailInterface;
}

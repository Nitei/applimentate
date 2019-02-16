import { Component, OnInit } from '@angular/core';
import {BmiRange} from './enums/bmi.bmi-range.enum';
import {Genre} from "./enums/bmi.genre.enum";

// export enum colorWeight { 'aqua', 'lime', 'yellow', 'orange', 'red' }
@Component( {
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: [ './bmi.page.scss' ],
} )
export class BmiPage implements OnInit {

  private height: number;
  private weight: number;
  private genre: Genre;
  public bmiResult = 0;
  public adjustImgLeft = 0;
  protected readonly GenreEnum = Genre;
  constructor () { }

  ngOnInit() { }

  onChangeGenre(genre): void {
    this.genre = genre;
  }

  onClickCalcBMI(): void {
    this.calcBMI();
  }

  disableCalcBMI(): boolean {
    return !this.height || !this.weight;
  }

  private calcBMI(): void {
    const result: number = this.weight / ( ( this.height / 100 ) * ( this.height / 100 ) );
    if ( result <= BmiRange.SLIM ) {
      this.adjustImgLeft = -5;
    } else if ( result <= BmiRange.FIT ) {
        this.adjustImgLeft = -254;
    } else if ( result <= BmiRange.OVERWEIGHT) {
        this.adjustImgLeft = -508;
    } else if ( result <= BmiRange.OBESE ) {
        this.adjustImgLeft = -762;
    } else {
        this.adjustImgLeft = -1016;
    }
    isNaN( result ) || result === Infinity
      ? this.bmiResult = 0
      : this.bmiResult = result;
  }
}


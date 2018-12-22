import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllergenTabsPage } from './allergen-tabs.page';
import { AllergenFoodPage } from '../allergen-food/allergen-food.page';
import { AllergenHealthPage } from '../allergen-health/allergen-health.page';
import { AllergenSummaryPage } from '../allergen-summary/allergen-summary.page';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: 'ALLERGENS.LUPINS/Food',
    component: AllergenFoodPage
  },
  {
    path: 'ALLERGENS.LUPINS/Health',
    component: AllergenHealthPage
  },
  {
    path: 'ALLERGENS.LUPINS/Summary',
    component: AllergenSummaryPage
  }
];

@NgModule( {
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild( routes )
  ],
  declarations: [ AllergenTabsPage, AllergenSummaryPage, AllergenHealthPage, AllergenFoodPage ],
  exports: [ AllergenTabsPage ]
} )
export class AllergenTabsPageModule { }

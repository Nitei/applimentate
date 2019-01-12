import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { AllergensPage } from './pages/allergens-list/allergens.page';
import { AllergensDetailPage } from './pages/allergens-detail/allergens-detail.page';
import { AllergensService } from './services';
import { AllergenSummaryPage } from './pages/allergen-summary/allergen-summary.page';
import { AllergenHealthPage } from './pages/allergen-health/allergen-health.page';
import { AllergenFoodPage } from './pages/allergen-food/allergen-food.page';


const routes: Routes = [
  { path: '', component: AllergensPage },
  {
    path: ':id', component: AllergensDetailPage,
    children: [
      {
        path: '',
        outlet: 'Summary',
        component: AllergenSummaryPage,
      },
      {
        path: 'Summary',
        outlet: 'Summary',
        component: AllergenSummaryPage,
      },
      {
        path: 'Health',
        outlet: 'Health',
        component: AllergenHealthPage,
      },
      {
        path: 'Food',
        outlet: 'Food',
        component: AllergenFoodPage,
      },
    ]
  },
];

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild( routes )
  ],
  declarations: [
    AllergensPage,
    AllergensDetailPage,
    AllergenSummaryPage,
    AllergenHealthPage,
    AllergenFoodPage
  ],
  providers: [ AllergensService ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
} )
export class AllergensModule { }

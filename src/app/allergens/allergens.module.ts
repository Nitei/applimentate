import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { AllergensPage } from './pages/allergens-list/allergens.page';
import { AllergensDetailPage } from './pages/allergens-detail/allergens-detail.page';

import { AllergensService } from './services';

const routes: Routes = [
  { path: '', component: AllergensPage },
  { path: ':id', component: AllergensDetailPage }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ AllergensPage, AllergensDetailPage ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ AllergensService ]
})
export class AllergensModule {}

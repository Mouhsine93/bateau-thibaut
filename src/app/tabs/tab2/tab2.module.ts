import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2PageRoutingModule } from './tab2-routing.module';

import { Tab2Page } from './tab2.page';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path: '',
    component: Tab2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2PageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}

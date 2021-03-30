import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { EnseignantPageRoutingModule } from './enseignant-routing.module';

import { EnseignantPage } from './enseignant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnseignantPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [EnseignantPage]
})
export class EnseignantPageModule {}

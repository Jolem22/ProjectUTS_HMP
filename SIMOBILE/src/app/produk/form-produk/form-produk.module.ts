import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { FormProdukPageRoutingModule } from './form-produk-routing.module';

import { FormProdukPage } from './form-produk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormProdukPageRoutingModule
  ],
  declarations: [FormProdukPage]
})
export class FormProdukPageModule {}
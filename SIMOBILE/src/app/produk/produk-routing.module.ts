import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdukPage } from './produk.page';

const routes: Routes = [
  {
    path: '',
    component: ProdukPage,
  },  {
    path: 'form-produk',
    loadChildren: () => import('./form-produk/form-produk.module').then( m => m.FormProdukPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdukPageRoutingModule {}

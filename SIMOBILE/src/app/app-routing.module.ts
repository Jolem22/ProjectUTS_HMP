import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: 'produk',
    loadChildren: () =>
      import('./produk/produk.module').then((m) => m.ProdukPageModule),
  },
  {
    path: 'transaksi',
    loadChildren: () =>
      import('./transaksi/transaksi.module').then((m) => m.TransaksiPageModule),
  },
  {
    path: 'profil',
    loadChildren: () =>
      import('./profil/profil.module').then((m) => m.ProfilPageModule),
  },
  {
    path: 'pengaturan',
    loadChildren: () =>
      import('./pengaturan/pengaturan.module').then(
        (m) => m.PengaturanPageModule,
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutPageModule),
  },
  {
    path: 'logout',
    loadChildren: () =>
      import('./logout/logout.module').then((m) => m.LogoutPageModule),
  },
  {
    path: 'produk-detail/:id',
    loadChildren: () =>
      import('./produk-detail/produk-detail.module').then(
        (m) => m.ProdukDetailPageModule,
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

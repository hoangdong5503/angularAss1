import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from 'src/component/product-list/product-list.component';
import { AdminLayoutComponent } from 'src/layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from 'src/layouts/base-layout/base-layout.component';
import { AboutPageComponent } from 'src/pages/about-page/about-page.component';
import { DashboardComponent } from 'src/pages/admin/dashboard/dashboard.component';
import { HomePageComponent } from 'src/pages/home-page/home-page.component';
import { PageNotFoundComponent } from 'src/pages/page-not-found/page-not-found.component';
import { ProductAddComponent } from 'src/pages/product-add/product-add.component';
import { ProductDetailComponent } from 'src/pages/product-detail/product-detail.component';
import { ProductEditComponent } from 'src/pages/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'product/:id', component: ProductDetailComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: "dashboard", pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ProductListComponent },
      { path: 'product/add', component: ProductAddComponent },
      { path: 'product/:id/edit', component: ProductEditComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from 'src/component/product-list/product-list.component';
import { HomePageComponent } from 'src/pages/home-page/home-page.component';
import { NavComponent } from 'src/component/nav/nav.component';
import { BaseLayoutComponent } from 'src/layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from 'src/layouts/admin-layout/admin-layout.component';
import { PageNotFoundComponent } from 'src/pages/page-not-found/page-not-found.component';
import { AboutPageComponent } from 'src/pages/about-page/about-page.component';
import { DashboardComponent } from 'src/pages/admin/dashboard/dashboard.component';
import { AdminProductComponent } from 'src/pages/admin/admin-product/admin-product.component';
import { ProductDetailComponent } from 'src/pages/product-detail/product-detail.component';
import { ProductAddComponent } from 'src/pages/product-add/product-add.component';
import { ProductEditComponent } from 'src/pages/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomePageComponent,
    NavComponent,
    BaseLayoutComponent,
    AdminLayoutComponent,
    PageNotFoundComponent,
    AboutPageComponent,
    DashboardComponent,
    AdminProductComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

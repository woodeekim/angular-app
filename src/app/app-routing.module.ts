import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './router-sample/home/home.component';
import { ProductComponent } from './router-sample/product/product.component';
import { ProductChildComponent } from './router-sample/product-child/product-child.component';
import { ProductDescriptionComponent } from './router-sample/product-description/product-description.component';
import { SellerComponent } from './router-sample/seller/seller.component';
import {RouterSampleRoutingModule} from './router-sample/router-sample-routing/router-sample-routing.module';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'product/:id', component: ProductChildComponent,
    children: [
      { path: '', component: ProductDescriptionComponent},
      { path: 'seller/:id', component: SellerComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

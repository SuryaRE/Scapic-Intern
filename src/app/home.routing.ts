import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ProductsComponent } from './home/products/products.component';
import { ProductLogComponent } from './home/product-log/product-log.component';
import { PredictionComponent } from './home/prediction/prediction.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const homeRoutes: Routes = [
    {path: '' , redirectTo: 'productLog', pathMatch: 'full'},
    {  path: 'products' , component: ProductsComponent},
    {  path: 'productLog' , component: ProductLogComponent},
    {  path: 'getPrediction' , component: PredictionComponent },
    {path: '**', redirectTo: '/notfound', pathMatch: 'full'},
    {path: 'notfound', component: PagenotfoundComponent}

];

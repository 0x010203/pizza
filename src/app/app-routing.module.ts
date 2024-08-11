import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './views/layout.component';
//import { MainComponent } from './views/home/main/main.component';
//import { AboutComponent } from './views/home/about/about.component';
// import { ProductsComponent } from './views/products/products/products.component';
// import { OrderComponent } from './views/order/order.component';
// import { ProductComponent } from './views/products/product/product.component';
// import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
{
  path: '',
  component: LayoutComponent,
  children: [
    {path: '', loadChildren: ()=>import('./views/home/home.module').then(m => m.HomeModule)},
    {path: 'order', loadChildren: ()=>import('./views/order/order.module').then(m => m.OrderModule)},
    {path: 'products', loadChildren: ()=>import('./views/products/products.module').then(m => m.ProductsModule)},
  ]
},

  // {path: '', component: MainComponent},
  // {path: 'about', component: AboutComponent},
  // {path: 'products', component: ProductsComponent},
  // {path: 'products/:id', component: ProductComponent},
  // {path: 'order', component: OrderComponent, canActivate: [AuthGuard]},
  {path: 'pizzas', redirectTo:  'products'}, //редирект, если остались старые адреса
  {path: '**', redirectTo: ''}, //редирект, если станница не найдена
];

@NgModule({
  /*{anchorScrolling: 'enabled'} - включен скроллинг по якорю*/ 
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

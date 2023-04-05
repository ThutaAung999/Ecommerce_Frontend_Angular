import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderListComponent} from "./orders/order-list/order-list.component";

const routes: Routes = [


  { path: 'products',
                loadChildren: () =>
                  import('./products/products.module').then((m) => m.ProductsModule),
  },
  {path:'order',component:OrderListComponent},
  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

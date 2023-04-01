import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import {AddProductComponent} from "./add-product/add-product.component";
import {DeleteProductComponent} from "./delete-product/delete-product.component";

const routes: Routes = [

  { path: '', component: ProductsComponent ,

    children: [
      { path: 'add-product', component: AddProductComponent },
      { path: 'delete-product', component: DeleteProductComponent },
    ],
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

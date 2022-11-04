import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ListComponent } from './list/list.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  { path: "", component: ListComponent },
  { path: "addProduct", component: AddProductComponent },
  { path: "Product/:id", component: SingleProductComponent },
  // {path:"editProduct/:id",component:}
  // {path:"deleteProduct/:id",component:}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

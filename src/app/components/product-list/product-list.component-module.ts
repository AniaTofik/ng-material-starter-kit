import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductListComponent } from './product-list.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListComponentModule {
}

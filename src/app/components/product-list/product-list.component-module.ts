import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductListComponent } from './product-list.component';
import {CommonModule} from "@angular/common";
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [MatCardModule, CommonModule, MatListModule],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListComponentModule {
}

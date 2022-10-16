import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ProductCategoryComponent } from './product-category.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatListModule, MatButtonToggleModule],
  declarations: [ProductCategoryComponent],
  providers: [],
  exports: [ProductCategoryComponent]
})
export class ProductCategoryComponentModule {
}

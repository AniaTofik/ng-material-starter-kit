import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ProductListComponentModule} from "./components/product-list/product-list.component-module";
import {ProductsServiceModule} from "./services/products.service-module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    ProductListComponentModule,
    ProductsServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

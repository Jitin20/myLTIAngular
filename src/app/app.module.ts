import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './products/productlist/productlist.component';
import { StarcomponentComponent } from './shared/starcomponent/starcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    StarcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

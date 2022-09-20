import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './products/productlist/productlist.component';
import { StarcomponentComponent } from './shared/starcomponent/starcomponent.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailComponent } from './products/productdetails/productdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    StarcomponentComponent,
    WelcomeComponent,
    ProductDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products', component:ProductlistComponent},
      {path:'products/:id', component:ProductDetailComponent},
      {path:'welcome', component:WelcomeComponent},
      {path:'', redirectTo:'welcome', pathMatch:'full'},//This is for the first page that we were trying to do in our project aur jugad lagaya tha
      {path:'**', redirectTo:'Welcome', pathMatch:'full'} //This page will be shown when any error occured, jo m chess.com wake m dekh rha tha 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

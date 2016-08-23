import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { CartComponent }  from './cart-checkout.component'
import { BooksListComponent } from './books-list.component';
import {ShareBooks } from './share-books.service';
import { HttpModule }     from '@angular/http';
import { AddressComponent } from './address-form.component'
import { routing,
         appRoutingProviders } from './app.routing';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksListComponent,
    FooterComponent,
    CartComponent,
    AddressComponent
  ],
   providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
import { Routes, RouterModule } from '@angular/router';
import { CartComponent }        from './cart-checkout.component';
import { BooksListComponent }   from './books-list.component'; 
import { AppComponent }         from './app.component';
import { AddressComponent }     from './address-form.component';
import { SearchedBooksListComponent } from './books-searched.component';

const appRoutes: Routes = [
{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
   
  { path: 'cart', 
  component: CartComponent },
  
  {
      path: 'home',
      component: BooksListComponent
  },
  { path: 'searchedhome', 
  component: SearchedBooksListComponent },
   {
      path: 'addressform',
      component: AddressComponent
  }  
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
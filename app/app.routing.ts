import { Routes, RouterModule } from '@angular/router';
import { CartComponent }        from './cart-checkout.component';
import { BooksListComponent }   from './books-list.component'; 
import { AppComponent }         from './app.component';
import { AddressComponent }     from './address-form.component'
const appRoutes: Routes = [
  { path: 'cart', 
  component: CartComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
      path: 'home',
      component: BooksListComponent
  },
   {
      path: 'addressform',
      component: AddressComponent
  }  
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
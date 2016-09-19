import { Routes, RouterModule } from '@angular/router';
import { CartComponent }        from './cart-checkout.component';
import { BooksListComponent }   from './books-list.component'; 
import { AppComponent }         from './app.component';
import { AddressComponent }     from './address-form.component';
import { DummyComponent } from './dummy.component';
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

  {   path: 'home/:word',
      component: BooksListComponent
  },
  {   path: 'dummy',
      component: DummyComponent
  },
   {
      path: 'addressform',
      component: AddressComponent
  }  
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
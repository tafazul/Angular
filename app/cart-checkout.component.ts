import { Component, Input, OnInit } from '@angular/core';
import { Book }             from './book';
import { ShareBooks }       from './share-books.service';
import { Router }            from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: `app/cart-checkout.component.html`,
  providers: [ShareBooks]
  
})
export class CartComponent  {
 public selectedBooks=JSON.parse(localStorage.getItem('cartItems'));
 constructor(private router : Router){}

gotoForm(){
       this.router.navigate(['/addressform']);
  }
}
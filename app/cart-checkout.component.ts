import { Component, Input, OnInit } from '@angular/core';
import { Book }             from './book';
import { BooksInCartService }       from './books-in-cart.service';
import { Router }            from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: `app/cart-checkout.component.html`,
  providers: [BooksInCartService]
  
})
export class CartComponent  {
 selectedBooks:Book[]=[];
 factor = 1;

 constructor(private router : Router,
              private booksInCartService : BooksInCartService ){
                this.getBooksFromCart();
              }

gotoForm(){
       this.router.navigate(['/addressform']);
  }
  getBooksFromCart(){
      this.booksInCartService.getBooksInCart().then(
        (selectedBooks:Book[])=>this.selectedBooks=selectedBooks
      );
  }
}
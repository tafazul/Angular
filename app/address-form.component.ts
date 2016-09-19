import { Component, Input, OnInit } from '@angular/core';
import { Book }             from './book';
import { BooksInCartService }       from './books-in-cart.service';
import { Router }            from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: `app/address-form.component.html`,
   providers: [BooksInCartService]
  
})
export class AddressComponent  {
    isSuccess = false; 
 constructor(private router : Router,
             private booksInCartService : BooksInCartService ){}
 gotoHome(){
   localStorage.setItem("success", "success");
      this.booksInCartService.clearCart();
      this.router.navigate(['/home']);
 }
}
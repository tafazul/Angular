import { Component, Input, OnInit } from '@angular/core';
import { Book }             from './book';
import { ShareBooks }       from './share-books.service';
import { Router }            from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: `app/address-form.component.html`,
  
})
export class AddressComponent  {
    isSuccess = false; 
 constructor(private router : Router){}
 gotoHome(){
      this.router.navigate(['/home']);
 }
}
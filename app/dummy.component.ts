import { Component, Input, OnInit } from '@angular/core';
import { Book }             from './book';
import { ShareBooks }       from './share-books.service';
import { Router }            from '@angular/router';
@Component({
  selector: 'dummy',
  templateUrl: `app/address-form.component.html`,
  
})
export class DummyComponent implements OnInit  {
    isSuccess = false; 
 constructor(private router : Router){}
 ngOnInit(){
     console.log("In dummy");
      this.router.navigate(['/home']);
 }
}
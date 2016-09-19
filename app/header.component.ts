import { Component } from '@angular/core';
import { Router }    from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: `app/header.component.html`,
})
export class HeaderComponent {
 title = 'The Book Store';

 constructor(private router : Router){}
 setSearchTerm(searchterm : string){
  localStorage.setItem("searchTerm",searchterm);
 }
}
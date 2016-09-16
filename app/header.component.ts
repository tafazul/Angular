import { Component } from '@angular/core';
import { Router }    from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: `app/header.component.html`,
  styles: [`
    
  `]
})
export class HeaderComponent {
 title = 'The Book Store';

 constructor(private router : Router){}
 setSearchTerm(searchterm : string){
  alert("clicked"+searchterm);
  localStorage.setItem("searchTerm",searchterm);
  let link = ['/searchedhome'];
  this.router.navigate(link);

 }
}
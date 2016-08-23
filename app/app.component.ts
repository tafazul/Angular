import { Component, OnInit } from '@angular/core';
import './rxjs-operators';
import { Book }              from './book';
import { Router }            from '@angular/router';


@Component({
  selector: 'my-app',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>

  `,
  styles: [`
   
  `]
})
export class AppComponent {

 
}
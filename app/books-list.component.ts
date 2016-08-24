import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book }              from './book';
import { Router }            from '@angular/router';
import { BookService }       from './book.service';
import { CartComponent }     from './cart-checkout.component';
import { ShareBooks }       from './share-books.service';
@Component({
  selector: 'books-list',
  templateUrl: 'app/books-list.component.html',
  providers: [ BookService,ShareBooks],
  directives: [CartComponent]
})
export class BooksListComponent implements OnInit {
  errorMessage: string;
  addText = 'Add to Cart';
  addClass= 'glyphicon glyphicon-shopping-cart';
  books: Book[];
  mode = 'Observable';
  selectedBooks : Book[] =[];
  isSuccess = false;
 l:number=0;
  public cartitems:Book[];
  constructor (private bookService: BookService,
              public service : ShareBooks,
               private router: Router
               ) {
                 this.service = service;
               }

  ngOnInit() { this.getBooks(); 
    this.isCartEmpty();

   }
   isCartEmpty(){
      
     this.cartitems =JSON.parse(localStorage.getItem('cartItems'));
     this.l =  this.cartitems.length;
     if(this.l!=0){
       this.isSuccess = true;
     }
   }

  getBooks() {
    this.bookService.getBooks()                     
                     .subscribe(
                       books => this.books = books,
                       error =>  this.errorMessage = <any>error);
  }
  gotoCart(){
    localStorage.setItem('cartItems',JSON.stringify(this.selectedBooks))
       this.router.navigate(['/cart']);
  }
  selectBook(book:Book){
    this.selectedBooks.push(book);
     
  }

}


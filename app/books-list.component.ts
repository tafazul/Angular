import { Component, OnInit } from '@angular/core';
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
  a:Book[];
  constructor (private bookService: BookService,
              public service : ShareBooks,
               private router: Router
               ) {
                 this.service = service;
               }

  ngOnInit() { this.getBooks(); 
   if(this.router.url === '/addressform'){
     this.isSuccess=true;
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


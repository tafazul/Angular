import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book }              from './book';
import { Router, ActivatedRoute }            from '@angular/router';
import { BookService }       from './book.service';
import { CartComponent }     from './cart-checkout.component';
import { BooksInCartService }       from './books-in-cart.service';
@Component({
  selector: 'shared-books-list',
  templateUrl: 'app/books-searched.component.html',
  providers: [ BookService,BooksInCartService],
  directives: [CartComponent]
})
export class SearchedBooksListComponent implements OnInit {
  errorMessage: string;
  books: Book[];
  mode = 'Observable';
  selectedBooks : Book[] =[];
  isSuccess = false;
  noSelectedBooks = false;
 l:number=0;
 searchString : string = "Artificial" ;
  public cartitems:Book[];
  constructor (private bookService: BookService,
              public booksInCartService : BooksInCartService,
              private route : ActivatedRoute,
               private router: Router
               ) {
                
            this.searchString=localStorage.getItem('searchTerm');
             console.log("BOOKLIST"+this.searchString.toString());
               }

  ngOnInit() { this.getBooks(); 
    this.isCartEmpty();
   this.searchString= this.route.snapshot.params['searchWord'];
   console.log(this.searchString);
   }
   isCartEmpty(){
      
     this.cartitems =this.selectedBooks;
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
   
  

       this.router.navigate(['/cart']);
    
  }
  selectBook(book:Book){
    
    this.selectedBooks.push(book);
    this.booksInCartService.insertBooksInCart(book);
     
  }
  isBookSelected (book:Book){
    let flag : boolean = false;
   for (let selectedBook of this.selectedBooks){
     if(selectedBook.id===book.id){
       flag = true;
     }
   }
   return flag;
  }

}


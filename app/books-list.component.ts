import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book }              from './book';
import { Router, ActivatedRoute} from '@angular/router';
import { BookService }       from './book.service';
import { CartComponent }     from './cart-checkout.component';
import { BooksInCartService }       from './books-in-cart.service';
@Component({
  selector: 'books-list',
  templateUrl: 'app/books-list.component.html',
  providers: [ BookService,BooksInCartService],
  directives: [CartComponent]
})
export class BooksListComponent implements OnInit,OnDestroy {
  errorMessage: string;
  books: Book[];
  mode = 'Observable';
  selectedBooks : Book[] =[];
  isSuccess = false;
  noSelectedBooks = false;
  isEmpty : boolean = false;
  l:number=0;
  checkedSubjects : string[]=[];
  checkedPrice : number=1;
  checkedPrice1: number;
  searchString : string = "";
  public cartitems:Book[];
  constructor (private bookService: BookService,
              public booksInCartService : BooksInCartService,
              private route : ActivatedRoute,
               private router: Router
               ) {
               }

  ngOnInit() { this.getBooks(); 
    this.isTransactionSuccess();
    if(localStorage.getItem("searchTerm")!=null){
   this.searchString = localStorage.getItem("searchTerm");

   }
   }
    ngOnDestroy() {
      
    }
   isTransactionSuccess(){
     if(localStorage.getItem("success")=="success"){
       this.isSuccess = true;
     }
     localStorage.removeItem("success");
   }

  getBooks() {
    this.bookService.getBooks()                     
                     .subscribe(
                       books => this.books = books,
                       error =>  this.errorMessage = <any>error);
  }
  gotoCart(){
    localStorage.removeItem("searchTerm");
       if(this.selectedBooks.length==0){
           this.isEmpty = true;
       }
       else{
       this.router.navigate(['/cart']);
       }
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

 toggleCheck(subject : string){
   console.log(this.checkedSubjects);
     if(this.checkedSubjects.indexOf(subject,0)!=-1){
       var index = this.checkedSubjects.indexOf(subject, 0);
       this.checkedSubjects.splice(index,1); 
     }else {
       this.checkedSubjects.push(subject);
     }
     this.checkedSubjects=this.checkedSubjects.slice();
     console.log(this.checkedSubjects);
  }
  priceCheck(price : number){
  this.checkedPrice1 = price;
  this.checkedPrice = this.checkedPrice1;
  }
  
}


import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book }              from './book';
import { Router, ActivatedRoute }            from '@angular/router';
import { BookService }       from './book.service';
import { CartComponent }     from './cart-checkout.component';
import { BooksInCartService }       from './books-in-cart.service';
@Component({
  selector: 'books-list',
  templateUrl: 'app/books-list.component.html',
  providers: [ BookService,BooksInCartService],
  directives: [CartComponent]
})
export class BooksListComponent implements OnInit {
  errorMessage: string;
  books: Book[];
  mode = 'Observable';
  selectedBooks : Book[] =[];
  isSuccess = false;
  noSelectedBooks = false;
  isEmpty : boolean = false;
  l:number=0;
  checkedSubjects : string[]=[];

  public cartitems:Book[];
  constructor (private bookService: BookService,
              public booksInCartService : BooksInCartService,
              private route : ActivatedRoute,
               private router: Router
               ) {
               }

  ngOnInit() { this.getBooks(); 
    this.isCartEmpty();
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
   
    console.log(this.checkedSubjects.indexOf(subject,0));
   for(let sub of this.checkedSubjects){
      
     
     if(this.checkedSubjects.indexOf(subject,0)!=-1){
       var index = this.checkedSubjects.indexOf(subject, 0);
       this.checkedSubjects.splice(index,1);
      
     }else  if(this.checkedSubjects.indexOf(subject,0)==-1){
       console.log(subject);
       this.checkedSubjects.push(subject);
     }
   }
 }
}


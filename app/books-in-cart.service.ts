import { Injectable} from '@angular/core';
import { CartBooks } from './books-in-cart';
import { Book } from './book';


@Injectable()
export class BooksInCartService{
    getBooksInCart(){
        return Promise.resolve(CartBooks);
    }
    insertBooksInCart(book : Book){
        Promise.resolve(CartBooks).then((books:Book[])=>books.push(book));
    }
    clearCart(){
        CartBooks.splice(0,CartBooks.length);
    }
}

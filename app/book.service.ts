import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Book }           from './book';
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class BookService {
  constructor (private http: Http) {}
   books: Book[];

  private booksUrl = 'https://api.mlab.com/api/1/databases/mongobook/collections/BookDetails?apiKey=Hzf_MHk9IoVJiLKRARJ1_AuRPJz2Q9Wo';  

  getBooks (): Observable<Book[]> {
    return this.http.get(this.booksUrl).map((res:Response) => res.json());
  }





/* getBooks (): Observable<Book[]> {
    return this.http.get(this.booksUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

     private extractData(res: Response) {
    let body = res.json();
    console.log("res.json()>>",res.json();
    return body || { };
  }*/

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); 
    return Observable.throw(errMsg);
  }
}

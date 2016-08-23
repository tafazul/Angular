import {Component,Input,Output,EventEmitter} from '@angular/core';
import {Book}                                            from './book';
import {Injectable} from '@angular/core';
@Injectable()
export class ShareBooks{
 selectedbooksservice : Book[]=[];
    saveBooks(book:Book){
       Promise.resolve(this.selectedbooksservice).then((books:Book[])=>this.selectedbooksservice.push(book));
    }
    getSharedBooks(){
        return Promise.resolve(this.selectedbooksservice) ;
    }
}

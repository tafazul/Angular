import { Pipe, PipeTransform } from '@angular/core';
import { Book }                from './book'
 
@Pipe({name : 'subjectFilter'})

export class SubjectFilterPipeComponent{
        filteredBooks : Book[]=[];
    transform(value:Book[], args : string[]){
        this.filteredBooks=[];
        if((!args[0])||args==null||args.length==0){
            return value;
        }
        else if(value){
            for(let sub of args){
                for(let book of value){
                    if(sub==book.Subject)
                    this.filteredBooks.push(book);
                }
            }
        }
        return this.filteredBooks;
    }
}
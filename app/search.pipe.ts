import { Pipe, PipeTransform } from '@angular/core';
import { Book }                from './book'
 
@Pipe({name : 'searchFilter'})

export class SearchFilterPipeComponent{
    item:Book;
    transform(value:Book[], args : string){
        if((!args[0])||args==null||args==""){
            return value;
        }
        else if(value){
            return value.filter(item=>{
                if(item.BookName.indexOf(args)!==-1){
                    return true;
                }
            } );
        }
    }
}
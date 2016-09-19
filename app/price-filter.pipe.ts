import { Pipe, PipeTransform } from '@angular/core';
import { Book }                from './book'
 
@Pipe({name : 'priceFilter'})

export class PriceFilterPipeComponent{
    transform(value:Book[], args : number){
      
        if(args==1){
            return value;
        } else  if(args==2){
               return value.filter(book=>(book.Price>=0&&book.Price<=300));
           }
         else  if(args==3){
               return value.filter(book=>(book.Price>=300&&book.Price<=600));
           }
           else if(args==4){
                return value.filter(book=>(book.Price>=600&&book.Price<=900));
           }
           else if(args==5){
                return value.filter(book=>(book.Price>=900));
           }
    }
}
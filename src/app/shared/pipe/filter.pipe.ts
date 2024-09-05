import { Pipe, PipeTransform } from '@angular/core';
import { Root } from '../interface/product';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(productList: Root[], word: string): Root[] {
    return productList.filter((m)=>{
      return m.title.includes(word);
    })
  }

}


// productsList[]
// word
// object
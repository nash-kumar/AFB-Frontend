import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string, propName2: string): any {
    
    if(!value) return [];

    if(!filterString) return value;
    
    filterString = filterString.toLowerCase();

    return value.filter( it => {
      return it[propName].toLowerCase().includes(filterString) || it[propName2].toLowerCase().includes(filterString);
    });
   }


}

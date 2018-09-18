import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, fname: any,lname:any): any {
    return value.sort((a, b) => {
      if(a[fname] > b[fname]){
        return -1;
      }
      else{
        return 1;
      }
    });
  }

}

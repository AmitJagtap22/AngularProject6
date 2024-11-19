import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string {
    var strRev:string="";
    var i:number=0;

    for(i=value.length-1;i>=0;i--){
      strRev+=value[i]
    }
    return strRev;
  }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true
})
export class MyMultPipe implements PipeTransform {

  transform(value:number, ...args: number[]): unknown {
    return value * args[0]
  }
}
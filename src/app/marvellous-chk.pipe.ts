import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param: string): string {
    var outcome:string=""

    switch(param){
      case "Prime":{
        var cnt:number=0
        var flag:number=0

        for(cnt=2;cnt<value;cnt++){
          if(value%cnt==0){
            flag++
          }
        }
        if(flag<1){
          outcome = "It is Prime number"
        }
        else{
          outcome = "It is not Prime number"
        }
        break
      }
      case "Perfect":{
        var sum:number=1
        for(let i=2;i*i<=value;i++){
          if(value%i==0){
            if(i*i!=value){
              sum+=i+value/i
            }
            else{
              sum+=i
            }
          }
        }
        if(sum==value&&value!=1){
          outcome = "It is Perfect number"
        }
        else{
          outcome = "It is not Perfect number"
        }
        break
      }
      case "Even":{
        if(value%2==0){
          outcome = "It is Even"
        }
        else{
          outcome = "It is not Even"
        }
        break
      }
      case "Odd":{
        if(value%2!=0){
          outcome = "It is Odd"
        }
        else{
          outcome = "It is not Odd"
        }
        break
      }
      default:{
        outcome="This is not a valid check"
      }
    }
    return outcome;
  }
}
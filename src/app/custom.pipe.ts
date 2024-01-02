import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true
})
export class CustomPipe implements PipeTransform 
{

  transform(value: string, ...args: unknown[]): string 
  {

    console.log("Inside Transform");
    let temp : string = "";

    for( let i = value.length-1;i>=0;i--)
    {
      temp = temp+value[i];
    }
    return temp;
  }

}

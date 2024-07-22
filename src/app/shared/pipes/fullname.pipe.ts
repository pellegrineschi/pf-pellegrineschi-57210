import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    return value.split('').reverse().join('');
  }

}

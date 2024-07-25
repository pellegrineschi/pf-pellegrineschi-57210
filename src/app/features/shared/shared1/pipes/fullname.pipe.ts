import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    return `${value.name} ${value.lastname}`;
  }

}

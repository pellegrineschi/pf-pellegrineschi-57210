import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: { name: string; lastname: string; }): string {
    return `${value.name} ${value.lastname}`;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if(!value) return "";

    return value.split('')[0].toUpperCase() + value.substring(1);
  }

}

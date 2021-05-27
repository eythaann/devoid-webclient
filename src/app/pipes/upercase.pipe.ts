import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upercase'
})
export class UpercasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

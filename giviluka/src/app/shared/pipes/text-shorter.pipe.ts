import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textShorter',
  standalone: true
})
export class TextShorterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

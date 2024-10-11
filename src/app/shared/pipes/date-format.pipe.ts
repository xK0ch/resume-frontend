import {
  Pipe,
  PipeTransform,
} from '@angular/core';
import { isNullOrUndefined } from '@ewerk/null-or-undefined';

@Pipe({
  name: 'dateFormat',
  standalone: true,
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (isNullOrUndefined(value)) {
      return '-';
    }

    const [
      year,
      month,
      day,
    ] = value.split('-');

    return `${day}.${month}.${year}`;
  }
}

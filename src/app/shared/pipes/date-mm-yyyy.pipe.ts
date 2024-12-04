import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateMmYyyy',
  standalone: true,
})
export class DateMmYyyyPipe implements PipeTransform {
  transform(value: Date | string | null | undefined): string {
    if (!value) return '';
    const date = value instanceof Date ? value : new Date(value);
    if (isNaN(date.getTime())) return '';
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${year}`;
  }
}

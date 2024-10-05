import {
  Pipe,
  PipeTransform,
} from '@angular/core';
import {isNullOrUndefined} from "../../utils/is-null-or-undefined";

@Pipe({
  name: 'defaultValue',
  standalone: true,
})
export class DefaultValuePipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (isNullOrUndefined(value)) {
      return '-';
    }

    return value;
  }

}

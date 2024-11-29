import {Injectable} from '@angular/core';
import {MatPaginatorIntl} from "@angular/material/paginator";
import {TranslocoService} from "@jsverse/transloco";

@Injectable({
  providedIn: 'root'
})
export class CustomMatPaginatorIntlService extends MatPaginatorIntl {

  constructor(private translocoService: TranslocoService) {
    super();

    this.translocoService.selectTranslateObject('skills.paginator').subscribe((translation) => {
      this.itemsPerPageLabel = translation.itemsPerPageLabel;

      this.getRangeLabel = (page, pageSize, length) => {
        if (length === 0 || pageSize === 0) {
          return `0 ${translation.of} ${length}`;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex =
          startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return `${startIndex + 1} - ${endIndex} ${translation.of} ${length}`;
      };

      this.changes.next();
    });
  }
}

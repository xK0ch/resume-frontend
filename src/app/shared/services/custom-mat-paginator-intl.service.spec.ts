import { TestBed } from '@angular/core/testing';

import { CustomMatPaginatorIntlService } from './custom-mat-paginator-intl.service';
import {getTranslocoModule} from "../../transloco-testing.module";

describe('CustomMatPaginatorIntlService', () => {
  let service: CustomMatPaginatorIntlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        getTranslocoModule()
      ]
    });
    service = TestBed.inject(CustomMatPaginatorIntlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

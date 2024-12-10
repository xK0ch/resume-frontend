import {CustomMatPaginatorIntlService} from "./custom-mat-paginator-intl.service";
import {TestBed} from "@angular/core/testing";
import {getTranslocoModule} from "../../transloco-testing.module";

describe('CustomMatPaginatorIntlService', () => {
  let service: CustomMatPaginatorIntlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        getTranslocoModule()
      ],
      providers: [
        CustomMatPaginatorIntlService,
      ],
    });

    service = TestBed.inject(CustomMatPaginatorIntlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set itemsPerPageLabel from translation', () => {
    expect(service.itemsPerPageLabel).toBe('Einträge pro Seite:');
  });

  it('should set getRangeLabel based on translation', () => {
    const rangeLabel = service.getRangeLabel(0, 10, 25);
    expect(rangeLabel).toBe('1 - 10 von 25');
  });

  it('should return correct range label when length is 0', () => {
    const rangeLabel = service.getRangeLabel(0, 10, 0);
    expect(rangeLabel).toBe('0 von 0');
  });
});

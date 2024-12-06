import {ComponentFixture, TestBed} from '@angular/core/testing';
import {OverviewComponent} from './overview.component';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideMockStore} from "@ngrx/store/testing";
import {Store} from '@ngrx/store';
import {of} from 'rxjs';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewComponent],
      providers: [
        provideAnimationsAsync(),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideMockStore({})
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get active resume from the store', () => {
    const mockResume = {name: 'Test Resume'};
    store.dispatch = jest.fn();
    const spy = jest.spyOn(store, 'select').mockReturnValue(of(mockResume));

    component.activeResume$.subscribe(resume => {
      expect(resume).toEqual(mockResume);
    });
    fixture.detectChanges();
  });

  it('should get loading status from the store', () => {
    store.dispatch = jest.fn();
    const spy = jest.spyOn(store, 'select').mockReturnValue(of(true));

    component.isLoading$.subscribe(isLoading => {
      expect(isLoading).toBeTruthy();
    });
    fixture.detectChanges();
  });

  it('should call openExternalLink with the correct URL', () => {
    const openSpy = jest.spyOn(window, 'open').mockImplementation(() => null);
    const url = 'https://github.com';

    component.openExternalLink(url);

    expect(openSpy).toHaveBeenCalledWith(url, '_blank');
  });
});

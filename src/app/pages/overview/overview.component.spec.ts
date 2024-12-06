import {ComponentFixture, TestBed} from '@angular/core/testing';
import {OverviewComponent} from './overview.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideMockStore} from "@ngrx/store/testing";
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {MOCK_RESUMES} from "../../shared/mocks/resume-mocks";

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewComponent],
      providers: [
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
    store.dispatch = jest.fn();
    jest.spyOn(store, 'select').mockReturnValue(of(MOCK_RESUMES[0]));

    component.activeResume$.subscribe(resume => {
      expect(resume).toEqual(MOCK_RESUMES[0]);
    });
    fixture.detectChanges();
  });

  it('should get loading status from the store', () => {
    store.dispatch = jest.fn();
    jest.spyOn(store, 'select').mockReturnValue(of(true));

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

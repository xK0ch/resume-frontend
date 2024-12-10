import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {provideRouter} from "@angular/router";
import {getTranslocoModule} from "./transloco-testing.module";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        getTranslocoModule()
      ],
      providers: [
        provideRouter([]),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

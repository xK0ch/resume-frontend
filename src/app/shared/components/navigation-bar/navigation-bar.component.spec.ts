import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NavigationBarComponent} from './navigation-bar.component';
import {provideRouter} from "@angular/router";
import {getTranslocoModule} from "../../../transloco-testing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        getTranslocoModule(),
        NavigationBarComponent
      ],
      providers: [
        provideRouter([]),
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

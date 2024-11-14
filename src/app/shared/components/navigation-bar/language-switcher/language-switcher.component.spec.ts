import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LanguageSwitcherComponent} from './language-switcher.component';
import {getTranslocoModule} from "../../../../transloco-testing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('LanguageSwitcherComponent', () => {
  let component: LanguageSwitcherComponent;
  let fixture: ComponentFixture<LanguageSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        getTranslocoModule(),
        LanguageSwitcherComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LanguageSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

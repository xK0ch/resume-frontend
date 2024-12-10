import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageSwitcherComponent } from './language-switcher.component';
import { getTranslocoModule } from '../../../../transloco-testing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslocoService } from '@jsverse/transloco';
import { of } from 'rxjs';

describe('LanguageSwitcherComponent', () => {
  let component: LanguageSwitcherComponent;
  let fixture: ComponentFixture<LanguageSwitcherComponent>;
  let translocoService: TranslocoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        getTranslocoModule(),
        LanguageSwitcherComponent
      ],
      providers: [
        TranslocoService,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LanguageSwitcherComponent);
    component = fixture.componentInstance;
    translocoService = TestBed.inject(TranslocoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default language', () => {
    const expectedDefaultLang = 'de';
    jest.spyOn(translocoService, 'getDefaultLang').mockReturnValue(expectedDefaultLang);

    fixture.detectChanges();

    expect(component.currentLang).toBe(expectedDefaultLang);
  });

  it('should set available languages', () => {
    const availableLangs = ['de', 'en'];
    jest.spyOn(translocoService, 'getAvailableLangs').mockReturnValue(availableLangs);

    fixture.detectChanges();

    expect(component.languages).toEqual(availableLangs);
  });

  it('should update currentLang and call TranslocoService.setActiveLang when onChange is called', () => {
    const newLang = 'en';
    const setActiveLangSpy = jest.spyOn(translocoService, 'setActiveLang');

    component.onChange(newLang);

    expect(setActiveLangSpy).toHaveBeenCalledWith(newLang);
    expect(component.currentLang).toBe(newLang);
  });


  it('should get flag URL correctly', () => {
    const flagUrl = component.getFlagUrl('de');
    expect(flagUrl).toBe('http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg');
  });
});

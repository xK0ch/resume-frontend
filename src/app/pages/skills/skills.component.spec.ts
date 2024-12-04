import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SkillsComponent} from './skills.component';
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {getTranslocoModule} from "../../transloco-testing.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {provideMockStore} from "@ngrx/store/testing";

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        getTranslocoModule(),
        NoopAnimationsModule,
        SkillsComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideMockStore({})
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

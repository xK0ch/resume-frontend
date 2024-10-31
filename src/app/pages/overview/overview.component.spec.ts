import {ComponentFixture, TestBed} from '@angular/core/testing';
import {OverviewComponent} from './overview.component';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewComponent],
      providers: [provideAnimationsAsync()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TimelineComponent} from './timeline.component';
import {getTranslocoModule} from "../../transloco-testing.module";

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        getTranslocoModule(),
        TimelineComponent,
      ],
      providers: []
    })
      .compileComponents();

    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

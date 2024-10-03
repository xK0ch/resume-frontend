import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { ResumeOverviewComponent } from './resume-overview.component';

describe('ResumeOverviewComponent', () => {
  let component: ResumeOverviewComponent;
  let fixture: ComponentFixture<ResumeOverviewComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [ResumeOverviewComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimationsAsync(),
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ResumeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { ResumeStore } from '../../stores/resume.store';
import { GeneralInformationComponent } from './general-information/general-information.component';

@Component({
  selector: 'app-resume-overview',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    GeneralInformationComponent,
  ],
  templateUrl: './resume-overview.component.html',
  styleUrl: './resume-overview.component.scss',
  animations: [
    trigger('slideInFromTop', [
      transition(':enter', [
        style({
          transform: 'translateY(-100%)',
          opacity: 0,
        }),
        animate('1.5s ease-out', style({
          transform: 'translateY(0)',
          opacity: 1,
        })),
      ]),
    ]),
    trigger('slideInFromBottom', [
      transition(':enter', [
        style({
          transform: 'translateY(100%)',
          opacity: 0,
        }),
        animate('1.5s ease-out', style({
          transform: 'translateY(0)',
          opacity: 1,
        })),
      ]),
    ]),
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({
          transform: 'translateX(-100%)',
          opacity: 0,
        }),
        animate('1.5s ease-out', style({
          transform: 'translateX(0)',
          opacity: 1,
        })),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeOverviewComponent {

  resumeStore = inject(ResumeStore);
}

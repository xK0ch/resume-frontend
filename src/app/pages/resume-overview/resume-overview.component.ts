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
import {MatGridListModule} from '@angular/material/grid-list';

import {ResumeStore} from '../../stores/resume.store';
import {GeneralInformationComponent} from './general-information/general-information.component';

@Component({
  selector: 'app-resume-overview',
  standalone: true,
  imports: [
    GeneralInformationComponent,
    MatGridListModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
  ],
  templateUrl: './resume-overview.component.html',
  styleUrl: './resume-overview.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('2s ease-in', style({opacity: 1})),
      ]),
    ]),
  ],
})
export class ResumeOverviewComponent {

  resumeStore = inject(ResumeStore);
}

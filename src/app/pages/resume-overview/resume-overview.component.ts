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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeOverviewComponent {

  resumeStore = inject(ResumeStore);

}

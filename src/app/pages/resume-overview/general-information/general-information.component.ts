import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import {
  NgIconComponent,
  provideIcons,
} from '@ng-icons/core';
import {
  simpleGithub,
  simpleLinkedin,
} from '@ng-icons/simple-icons';

import { ResumeView } from '../../../../../api/src/models/resume-view';

@Component({
  selector: 'app-general-information',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './general-information.component.html',
  styleUrl: './general-information.component.scss',
  viewProviders: [
    provideIcons({
      simpleGithub,
      simpleLinkedin,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralInformationComponent {

  @Input() resume: ResumeView | undefined;
}

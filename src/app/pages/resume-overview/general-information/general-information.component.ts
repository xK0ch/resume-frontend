import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import {
  MatGridList,
  MatGridTile,
} from '@angular/material/grid-list';
import {
  NgIconComponent,
  provideIcons,
} from '@ng-icons/core';
import {
  simpleGithub,
  simpleLinkedin,
} from '@ng-icons/simple-icons';

import { ResumeView } from '../../../../../api/src/models/resume-view';
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';
import { DefaultValuePipe } from '../../../shared/pipes/default-value.pipe';

@Component({
  selector: 'app-general-information',
  standalone: true,
  imports: [
    DateFormatPipe,
    DefaultValuePipe,
    NgIconComponent,
    NgOptimizedImage,
    MatGridList,
    MatGridTile,
  ],
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

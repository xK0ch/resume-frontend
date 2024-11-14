import {Component, inject} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {ResumeStore} from "../../stores/resume.store";
import {NgOptimizedImage} from "@angular/common";
import {DefaultValuePipe} from "../../shared/pipes/default-value.pipe";
import {DateFormatPipe} from "../../shared/pipes/date-format.pipe";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    DateFormatPipe,
    DefaultValuePipe,
    MatProgressSpinner,
    NgOptimizedImage,
    TranslocoDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1.5s ease-in', style({opacity: 1})),
      ]),
    ]),
  ],
})
export class OverviewComponent {

  resumeStore = inject(ResumeStore);
}

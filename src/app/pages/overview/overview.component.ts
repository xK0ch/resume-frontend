import {Component, inject} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {NgOptimizedImage} from "@angular/common";
import {DefaultValuePipe} from "../../shared/pipes/default-value.pipe";
import {DateFormatPipe} from "../../shared/pipes/date-format.pipe";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {TranslocoDirective} from '@jsverse/transloco';
import {MatIconButton} from "@angular/material/button";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {ionLogoGithub, ionLogoLinkedin} from "@ng-icons/ionicons";
import {Store} from "@ngrx/store";
import {selectActiveResume, selectIsLoading} from "../../stores/resume-store/resume.reducer";
import {LetDirective, PushPipe} from "@ngrx/component";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    DateFormatPipe,
    DefaultValuePipe,
    LetDirective,
    MatIconButton,
    MatProgressSpinner,
    NgIcon,
    NgOptimizedImage,
    PushPipe,
    TranslocoDirective,
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
  viewProviders: [
    provideIcons({
      ionLogoGithub,
      ionLogoLinkedin,
    }),
  ],
})
export class OverviewComponent {

  #store = inject(Store);

  activeResume$ = this.#store.select(selectActiveResume);
  isLoading$ = this.#store.select(selectIsLoading);

  openExternalLink(url: string | undefined): void {
    window.open(url, '_blank');
  }
}

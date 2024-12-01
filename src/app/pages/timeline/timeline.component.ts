import {Component} from '@angular/core';
import {NgIcon, provideIcons} from "@ng-icons/core";
import {ionConstruct} from "@ng-icons/ionicons";
import {TranslocoDirective} from "@jsverse/transloco";

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    NgIcon,
    TranslocoDirective
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  viewProviders: [
    provideIcons({ionConstruct}),
  ],
})
export class TimelineComponent {
}

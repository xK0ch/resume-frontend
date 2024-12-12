import {Component} from '@angular/core';
import {NgIcon, provideIcons} from "@ng-icons/core";
import {ionSad} from "@ng-icons/ionicons";
import {TranslocoDirective} from "@jsverse/transloco";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    NgIcon,
    TranslocoDirective
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
  viewProviders: [
    provideIcons({ionSad}),
  ],
})
export class PageNotFoundComponent {

}

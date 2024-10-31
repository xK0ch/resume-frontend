import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [],
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

}

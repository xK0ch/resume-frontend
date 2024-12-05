import {Component, inject} from '@angular/core';
import {NgxTimelineEventGroup, NgxTimelineModule} from "@frxjs/ngx-timeline";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NgClass} from "@angular/common";
import {DateMmYyyyPipe} from "../../shared/pipes/date-mm-yyyy.pipe";
import {PushPipe} from "@ngrx/component";
import {Store} from "@ngrx/store";
import {selectEvents, selectIsLoading} from "../../stores/timeline-event-store/timeline-event.reducer";

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    DateMmYyyyPipe,
    MatProgressSpinnerModule,
    NgxTimelineModule,
    NgClass,
    PushPipe,
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {

  #store = inject(Store);

  timelineEvents$ = this.#store.select(selectEvents);
  isLoading$ = this.#store.select(selectIsLoading);

  eventGroup: NgxTimelineEventGroup = NgxTimelineEventGroup.YEAR;
}

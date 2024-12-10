import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TimelineEventsService} from "../../../../api/src/services";
import {catchError, exhaustMap, of, switchMap, withLatestFrom} from "rxjs";
import {map} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {selectActiveResume} from "../resume-store/resume.reducer";
import {TimelineEventActions} from "./timeline-event.actions";
import {ResumeActions} from "../resume-store/resume.actions";

@Injectable()
export class TimelineEventEffects {

  readonly #actions$ = inject(Actions);
  readonly #store = inject(Store);
  readonly #timelineEventService = inject(TimelineEventsService);

  readonly activeResume$ = this.#store.select(selectActiveResume);

  loadTimelineEvents$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(TimelineEventActions.loadingTriggered),
      withLatestFrom(this.activeResume$),
      exhaustMap(([, activeResume]) =>
        activeResume?.id
          ? this.#timelineEventService.getAllByResume({resumeId: activeResume.id}).pipe(
            map(timelineEvents => TimelineEventActions.loadingSuccessful({timelineEvents})),
            catchError(() => of(TimelineEventActions.loadingFailed()))
          )
          : of(TimelineEventActions.loadingFailed())
      )
    )
  );

  triggerTimelineEventLoading$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(ResumeActions.loadingSuccessful),
      switchMap(() => of(TimelineEventActions.loadingTriggered()))
    )
  );
}

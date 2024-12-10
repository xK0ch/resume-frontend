import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ResumeActions} from "../resume-store/resume.actions";
import {filter, map} from "rxjs/operators";
import {ROUTER_NAVIGATED} from "@ngrx/router-store";
import {withLatestFrom} from "rxjs";
import {Store} from "@ngrx/store";
import {selectLoaded} from "../resume-store/resume.reducer";

@Injectable()
export class RoutingEffects {

  readonly #actions$ = inject(Actions);
  readonly #store = inject(Store);

  routed$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      withLatestFrom(this.#store.select(selectLoaded)),
      filter(([, loaded]) => !loaded),
      map(() => ResumeActions.loadingTriggered()),
    )
  );
}

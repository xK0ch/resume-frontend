import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ResumeActions} from "../resume-store/resume.actions";
import {map} from "rxjs/operators";
import {ROUTER_NAVIGATED} from "@ngrx/router-store";

@Injectable()
export class RoutingEffects {

  readonly #actions$ = inject(Actions);

  routed$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      map(() => ResumeActions.loadingTriggered()),
    )
  );
}

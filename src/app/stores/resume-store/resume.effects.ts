import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ResumesService} from "../../../../api/src/services";
import {ResumeActions} from "./resume.actions";
import {catchError, exhaustMap, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class ResumeEffects {

  readonly #actions$ = inject(Actions);
  readonly #resumeService = inject(ResumesService);

  loadResumes$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(ResumeActions.loadingTriggered),
      exhaustMap(() => this.#resumeService.getAll()
        .pipe(
          map(resumes => ResumeActions.loadingSuccessful({resumes})),
          catchError(() => of(ResumeActions.loadingFailed))
        )
      )
    )
  );
}

import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {SkillsService} from "../../../../api/src/services";
import {catchError, exhaustMap, of, switchMap, withLatestFrom} from "rxjs";
import {map} from "rxjs/operators";
import {SkillActions} from "./skill.actions";
import {Store} from "@ngrx/store";
import {selectActiveResume} from "../resume-store/resume.reducer";
import {ResumeActions} from "../resume-store/resume.actions";

@Injectable()
export class SkillEffects {

  readonly #actions$ = inject(Actions);
  readonly #store = inject(Store);
  readonly #skillService = inject(SkillsService);

  readonly activeResume$ = this.#store.select(selectActiveResume);

  loadSkills$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(SkillActions.triggered),
      withLatestFrom(this.activeResume$),
      exhaustMap(([, activeResume]) =>
        activeResume?.id
          ? this.#skillService.getAllByResume1({resumeId: activeResume.id}).pipe(
            map(skills => SkillActions.loaded({skills})),
            catchError(() => of(SkillActions.failed()))
          )
          : of(SkillActions.failed())
      )
    )
  );

  triggerSkillLoading$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(ResumeActions.loaded),
      switchMap(() => of(SkillActions.triggered()))
    )
  );
}

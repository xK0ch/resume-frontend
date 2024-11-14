import {inject,} from '@angular/core';
import {tapResponse} from '@ngrx/operators';
import {patchState, signalStore, withHooks, withMethods, withState,} from '@ngrx/signals';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {pipe, switchMap, tap,} from 'rxjs';
import {SkillView} from "../../../api/src/models/skill-view";
import {SkillsService} from "../../../api/src/services/skills.service";

interface SkillState {
  skills: SkillView[];
  isLoading: boolean;
}

const initialState: SkillState = {
  skills: [],
  isLoading: false,
};

export const SkillStore = signalStore(
  {providedIn: 'root'},
  withState<SkillState>(initialState),
  withMethods((
    store,
    skillService = inject(SkillsService),
  ) => ({
    loadSkills: rxMethod<void>(
      pipe(
        tap(() => patchState(store, {isLoading: true})),
        switchMap(() => {
          return skillService.getAllByResume({resumeId: 'adb48270-e93b-4fc4-9de0-23fcb5427624'}).pipe(
            tapResponse({
              next: (skills) => patchState(store, {
                skills,
                isLoading: false,
              }),
              error: (err) => {
                patchState(store, {isLoading: false});
                console.error(err);
              },
            }),
          );
        }),
      ),
    ),
  })),
  withHooks(({loadSkills}) => {
    return {
      onInit(): void {
        loadSkills();
      },
    };
  }),
);
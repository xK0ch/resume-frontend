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
    skillService = inject(SkillsService)
  ) => ({
    loadSkills: rxMethod<void>(
      pipe(
        tap(() => patchState(store, {isLoading: true})),
        switchMap(() => {
          return skillService.getAllByResume({resumeId: '31bd2cbd-ded4-45ae-9812-bcf4e31ec5fa'}).pipe(
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

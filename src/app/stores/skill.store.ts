import {computed, inject} from '@angular/core';
import {tapResponse} from '@ngrx/operators';
import {patchState, signalStore, withHooks, withMethods, withState} from '@ngrx/signals';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {pipe, switchMap, tap} from 'rxjs';
import {SkillView} from '../../../api/src/models/skill-view';
import {SkillsService} from '../../../api/src/services/skills.service';
import {ResumeStore} from './resume.store'; // Adjust the path as necessary

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
  withMethods((store, skillService = inject(SkillsService), resumeStore = inject(ResumeStore)) => {
    const activeResumeId = computed(() => resumeStore.activeResume()?.id);

    return {
      loadSkills: rxMethod<void>(
        pipe(
          tap(() => patchState(store, {isLoading: true})),
          switchMap(() => {
            const resumeId = activeResumeId();
            if (!resumeId) {
              patchState(store, {isLoading: false});
              return [];
            }

            return skillService.getAllByResume({resumeId}).pipe(
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
    };
  }),
  withHooks(({loadSkills}) => {
    return {
      onInit(): void {
        loadSkills();
      },
      onUpdate(): void {
        loadSkills();
      },
    };
  }),
);

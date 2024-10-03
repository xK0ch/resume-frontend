import {
  computed,
  inject,
} from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  pipe,
  switchMap,
  tap,
} from 'rxjs';

import { ResumeView } from '../../../api/src/models/resume-view';
import { ResumesService } from '../../../api/src/services/resumes.service';

interface ResumeState {
  resumes: ResumeView[];
  isLoading: boolean;
}

const initialState: ResumeState = {
  resumes: [],
  isLoading: false,
};

export const ResumeStore = signalStore(
  { providedIn: 'root' },
  withState<ResumeState>(initialState),
  withMethods((
    store,
    resumeService = inject(ResumesService),
  ) => ({
    loadResumes: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return resumeService.getAll().pipe(
            tapResponse({
              next: (resumes) => patchState(store, {
                resumes,
                isLoading: false,
              }),
              error: (err) => {
                patchState(store, { isLoading: false });
                console.error(err);
              },
            }),
          );
        }),
      ),
    ),
  })),
  withComputed(({ resumes }) => ({
    activeResume: computed(() => resumes().find(resume => resume.status === 'ACTIVE')),
  })),
  withHooks(({ loadResumes }) => {
    return {
      onInit(): void {
        loadResumes();
      },
    };
  }),
);

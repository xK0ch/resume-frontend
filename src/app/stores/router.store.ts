import { inject } from '@angular/core';
import {
  NavigationEnd,
  Router,
} from '@angular/router';
import {
  patchState,
  signalStore,
  withMethods,
  withState,
} from '@ngrx/signals';
import { filter } from 'rxjs';

import { RESUME_OVERVIEW_SLUG } from '../app.routes';
import { ResumeStore } from './resume.store';

export interface RouterState {
  currentRoute: string | undefined;
}

const initialState: RouterState = {
  currentRoute: undefined,
};

export const RouterStore = signalStore(
  { providedIn: 'root' },
  withState<RouterState>(initialState),
  withMethods((store) => {
    const resumeStore = inject(ResumeStore);
    const router = inject(Router);

    router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        patchState(store, { currentRoute: event.urlAfterRedirects });

        const url: string = event.urlAfterRedirects;

        switch (url) {
          case `/${RESUME_OVERVIEW_SLUG}`:
            resumeStore.loadResumes();
            break;
          default:
            break;
        }
      });

    return {};
  }),
);

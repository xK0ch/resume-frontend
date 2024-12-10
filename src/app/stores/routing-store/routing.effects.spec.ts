import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {Observable, of} from 'rxjs';
import {RoutingEffects} from './routing.effects';
import {ROUTER_NAVIGATED} from '@ngrx/router-store';
import {ResumeActions} from '../resume-store/resume.actions';
import {selectLoaded} from "../resume-store/resume.reducer";

describe('RoutingEffects', () => {
  let actions$: Observable<any>;
  let effects: RoutingEffects;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RoutingEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          selectors: [
            {
              selector: selectLoaded,
              value: false,
            },
          ],
        }),
      ],
    });

    effects = TestBed.inject(RoutingEffects);
    store = TestBed.inject(MockStore);
  });

  it('should dispatch "loadingTriggered" action if data is not loaded', () => {
    actions$ = of(ROUTER_NAVIGATED);

    effects.routed$.subscribe((action) => {
      expect(action).toEqual(ResumeActions.loadingTriggered());
    });
  });

  it('should not dispatch any action if data is already loaded', () => {
    store.overrideSelector(selectLoaded, true);
    actions$ = of(ROUTER_NAVIGATED);

    effects.routed$.subscribe((action) => {
      expect(action).not.toEqual(ResumeActions.loadingTriggered());
    });
  });
});

import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {Observable, of} from 'rxjs';
import {RoutingEffects} from "./routing.effects";
import {ROUTER_NAVIGATED} from "@ngrx/router-store";
import {ResumeActions} from "../resume-store/resume.actions";

describe('RoutingEffects', () => {
  let actions$: Observable<any>;
  let effects: RoutingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RoutingEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(RoutingEffects);
  });

  it('should dispatch "loadingSuccessful" action when routed successfully', () => {
    actions$ = of(ROUTER_NAVIGATED);

    effects.routed$.subscribe((action) => {
      expect(action).toEqual(ResumeActions.loadingTriggered());
    });
  });
});

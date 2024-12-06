import {provideMockActions} from "@ngrx/effects/testing";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {TimelineEventsService} from "../../../../api/src/services";
import {Observable, of, throwError} from "rxjs";
import {MemoizedSelector} from "@ngrx/store";
import {TestBed} from "@angular/core/testing";
import {selectActiveResume} from "../resume-store/resume.reducer";
import {ResumeActions} from "../resume-store/resume.actions";
import {MOCK_RESUMES} from "../../shared/mocks/resume-mocks";
import {ResumeView} from "../../../../api/src/models/resume-view";
import {TimelineEventEffects} from "./timeline-event.effects";
import {MOCK_TIMELINE_EVENTS} from "../../shared/mocks/timeline-event-mocks";
import {TimelineEventActions} from "./timeline-event.actions";

describe('TimelineEventEffects', () => {
  let actions$: Observable<any>;
  let effects: TimelineEventEffects;
  let timelineEventsService: jest.Mocked<TimelineEventsService>;
  let store: MockStore;
  let selectActiveResumeMock: MemoizedSelector<any, ResumeView | undefined>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TimelineEventEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
        {
          provide: TimelineEventsService,
          useValue: {
            getAllByResume: jest.fn()
          }
        },
      ],
    });

    effects = TestBed.inject(TimelineEventEffects);
    timelineEventsService = TestBed.inject(TimelineEventsService) as jest.Mocked<TimelineEventsService>;
    store = TestBed.inject(MockStore);
    selectActiveResumeMock = store.overrideSelector(selectActiveResume, MOCK_RESUMES[0]);
  });

  it('should dispatch "loaded" action on successful timeline event retrieval', (done) => {
    selectActiveResumeMock.setResult(MOCK_RESUMES[0]);
    store.refreshState();

    timelineEventsService.getAllByResume.mockReturnValue(of(MOCK_TIMELINE_EVENTS));

    actions$ = of(TimelineEventActions.triggered());

    effects.loadTimelineEvents$.subscribe((action) => {
      expect(action).toEqual(TimelineEventActions.loaded({timelineEvents: MOCK_TIMELINE_EVENTS}));
      expect(timelineEventsService.getAllByResume).toHaveBeenCalledWith({resumeId: MOCK_RESUMES[0].id});
      done();
    });
  });

  it('should dispatch "failed" action when activeResume is undefined', (done) => {
    selectActiveResumeMock.setResult(undefined);
    store.refreshState();

    actions$ = of(TimelineEventActions.triggered());

    effects.loadTimelineEvents$.subscribe((action) => {
      expect(action).toEqual(TimelineEventActions.failed());
      expect(timelineEventsService.getAllByResume).not.toHaveBeenCalled();
      done();
    });
  });

  it('should dispatch "failed" action on service error', (done) => {
    selectActiveResumeMock.setResult(MOCK_RESUMES[0]);
    store.refreshState();

    timelineEventsService.getAllByResume.mockReturnValue(throwError(() => new Error('Failed to load timeline events')));

    actions$ = of(TimelineEventActions.triggered());

    effects.loadTimelineEvents$.subscribe((action) => {
      expect(action).toEqual(TimelineEventActions.failed());
      expect(timelineEventsService.getAllByResume).toHaveBeenCalledWith({resumeId: MOCK_RESUMES[0].id});
      done();
    });
  });

  it('should dispatch "triggered" action on resume loaded', (done) => {
    actions$ = of(ResumeActions.loaded({resumes: MOCK_RESUMES}));

    effects.triggerTimelineEventLoading$.subscribe((action) => {
      expect(action).toEqual(TimelineEventActions.triggered());
      done();
    });
  });
});


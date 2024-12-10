import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {ResumeEffects} from './resume.effects';
import {ResumeActions} from './resume.actions';
import {ResumesService} from '../../../../api/src/services';
import {Observable, of, throwError} from 'rxjs';
import {MOCK_RESUMES} from "../../shared/mocks/resume-mocks";

describe('ResumeEffects', () => {
  let actions$: Observable<any>;
  let effects: ResumeEffects;
  let resumesService: jest.Mocked<ResumesService>;

  beforeEach(() => {
    const resumesServiceMock = {
      getAll: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        ResumeEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
        {
          provide: ResumesService,
          useValue: resumesServiceMock
        },
      ],
    });

    effects = TestBed.inject(ResumeEffects);
    resumesService = TestBed.inject(ResumesService) as jest.Mocked<ResumesService>;
  });

  it('should dispatch "loadingFailed" action on error', (done) => {
    resumesService.getAll.mockImplementationOnce(() => throwError(() => new Error('Failed to load resumes')));

    actions$ = of(ResumeActions.loadingTriggered());

    effects.loadResumes$.subscribe((action) => {
      expect(action.type).toEqual(ResumeActions.loadingFailed.type);
      expect(resumesService.getAll).toHaveBeenCalledTimes(1);
      done();
    });
  });

  it('should dispatch "loadingSuccessful" action with resumes on success', (done) => {
    resumesService.getAll.mockReturnValue(of(MOCK_RESUMES));

    actions$ = of(ResumeActions.loadingTriggered());

    effects.loadResumes$.subscribe((action) => {
      expect(action).toEqual(ResumeActions.loadingSuccessful({resumes: MOCK_RESUMES}));
      expect(resumesService.getAll).toHaveBeenCalledTimes(1);
      done();
    });
  });
});

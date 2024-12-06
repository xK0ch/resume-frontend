import {SkillEffects} from "./skill.effects";
import {provideMockActions} from "@ngrx/effects/testing";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {SkillsService} from "../../../../api/src/services";
import {Observable, of, throwError} from "rxjs";
import {MemoizedSelector} from "@ngrx/store";
import {TestBed} from "@angular/core/testing";
import {selectActiveResume} from "../resume-store/resume.reducer";
import {SkillActions} from "./skill.actions";
import {ResumeActions} from "../resume-store/resume.actions";
import {MOCK_SKILLS} from "../../shared/mocks/skill-mocks";
import {MOCK_RESUMES} from "../../shared/mocks/resume-mocks";
import {ResumeView} from "../../../../api/src/models/resume-view";

describe('SkillEffects', () => {
  let actions$: Observable<any>;
  let effects: SkillEffects;
  let skillsService: jest.Mocked<SkillsService>;
  let store: MockStore;
  let selectActiveResumeMock: MemoizedSelector<any, ResumeView | undefined>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SkillEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
        {
          provide: SkillsService,
          useValue: {
            getAllByResume1: jest.fn()
          }
        },
      ],
    });

    effects = TestBed.inject(SkillEffects);
    skillsService = TestBed.inject(SkillsService) as jest.Mocked<SkillsService>;
    store = TestBed.inject(MockStore);
    selectActiveResumeMock = store.overrideSelector(selectActiveResume, MOCK_RESUMES[0]);
  });

  it('should dispatch "loaded" action on successful skill retrieval', (done) => {
    selectActiveResumeMock.setResult(MOCK_RESUMES[0]);
    store.refreshState();

    skillsService.getAllByResume1.mockReturnValue(of(MOCK_SKILLS));

    actions$ = of(SkillActions.triggered());

    effects.loadSkills$.subscribe((action) => {
      expect(action).toEqual(SkillActions.loaded({skills: MOCK_SKILLS}));
      expect(skillsService.getAllByResume1).toHaveBeenCalledWith({resumeId: MOCK_RESUMES[0].id});
      done();
    });
  });

  it('should dispatch "failed" action when activeResume is undefined', (done) => {
    selectActiveResumeMock.setResult(undefined);
    store.refreshState();

    actions$ = of(SkillActions.triggered());

    effects.loadSkills$.subscribe((action) => {
      expect(action).toEqual(SkillActions.failed());
      expect(skillsService.getAllByResume1).not.toHaveBeenCalled();
      done();
    });
  });

  it('should dispatch "failed" action on service error', (done) => {
    selectActiveResumeMock.setResult(MOCK_RESUMES[0]);
    store.refreshState();

    skillsService.getAllByResume1.mockReturnValue(throwError(() => new Error('Failed to load skills')));

    actions$ = of(SkillActions.triggered());

    effects.loadSkills$.subscribe((action) => {
      expect(action).toEqual(SkillActions.failed());
      expect(skillsService.getAllByResume1).toHaveBeenCalledWith({resumeId: MOCK_RESUMES[0].id});
      done();
    });
  });

  it('should dispatch "triggered" action on resume loaded', (done) => {
    actions$ = of(ResumeActions.loaded({resumes: MOCK_RESUMES}));

    effects.triggerSkillLoading$.subscribe((action) => {
      expect(action).toEqual(SkillActions.triggered());
      done();
    });
  });
});


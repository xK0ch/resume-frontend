import {ResumeActions} from './resume.actions';
import {MOCK_RESUMES} from "../../shared/mocks/resume-mocks";

describe('ResumeActions', () => {
  it('should create a "triggered" action', () => {
    const action = ResumeActions.triggered();
    expect(action.type).toBe('[Resume] Loading resumes triggered');
  });

  it('should create a "loaded" action with the correct payload', () => {

    const action = ResumeActions.loaded({resumes: MOCK_RESUMES});

    expect(action.type).toBe('[Resume] Resumes loaded successfully');
    expect(action.resumes).toEqual(MOCK_RESUMES);
  });

  it('should create a "failed" action', () => {
    const action = ResumeActions.failed();
    expect(action.type).toBe('[Resume] Loading resumes failed');
  });
});

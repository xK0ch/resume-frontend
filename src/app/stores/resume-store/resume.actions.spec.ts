import {ResumeActions} from './resume.actions';
import {MOCK_RESUMES} from "../../shared/mocks/resume-mocks";

describe('ResumeActions', () => {
  it('should create a "loadingTriggered" action', () => {
    const action = ResumeActions.loadingTriggered();
    expect(action.type).toBe('[Resume] loadingTriggered');
  });

  it('should create a "loadingSuccessful" action with the correct payload', () => {
    const action = ResumeActions.loadingSuccessful({resumes: MOCK_RESUMES});

    expect(action.type).toBe('[Resume] loadingSuccessful');
    expect(action.resumes).toEqual(MOCK_RESUMES);
  });

  it('should create a "loadingFailed" action', () => {
    const action = ResumeActions.loadingFailed();
    expect(action.type).toBe('[Resume] loadingFailed');
  });
});

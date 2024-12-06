import {ResumeActions} from './resume.actions';
import {MOCK_RESUMES} from "../../shared/mocks/resume-mocks";
import {initialState, reducer, selectActiveResume} from "./resume.reducer";

describe('Resume Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {type: 'unknown'})).toEqual(initialState);
  });

  it('should set isLoading to true when "triggered" action is dispatched', () => {
    const action = ResumeActions.triggered();
    const state = reducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  it('should update resumes and set isLoading to false when "loaded" action is dispatched', () => {
    const action = ResumeActions.loaded({resumes: MOCK_RESUMES});
    const state = reducer(initialState, action);

    expect(state.resumes).toEqual(MOCK_RESUMES);
    expect(state.isLoading).toBe(false);
  });

  it('should set isLoading to false when "failed" action is dispatched', () => {
    const action = ResumeActions.failed();
    const state = reducer(initialState, action);
    expect(state.isLoading).toBe(false);
  });

  it('should return the correct active resume when "selectActiveResume" selector is used', () => {
    const activeResume = selectActiveResume.projector(MOCK_RESUMES);
    expect(activeResume).toEqual(MOCK_RESUMES[0]);
  });
});

import {createFeature, createReducer, createSelector, on} from '@ngrx/store';
import {ResumeView} from "../../../../api/src/models/resume-view";
import {ResumeActions} from "./resume.actions";

interface ResumeState {
  resumes: ResumeView[];
  isLoading: boolean;
}

const initialState: ResumeState = {
  resumes: [],
  isLoading: false,
};

export const resumeFeature = createFeature({
  name: 'resume',
  reducer: createReducer(
    initialState,
    on(ResumeActions.triggered, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(ResumeActions.loaded, (state, {resumes}) => ({
      ...state,
      resumes,
      isLoading: false,
    })),
    on(ResumeActions.failed, (state) => ({
      ...state,
      isLoading: false,
    }))
  ),
  extraSelectors: ({selectResumes}) => {
    const selectActiveResume = createSelector(
      selectResumes,
      (resumes) => resumes.find(resume => resume.status === 'ACTIVE'),
    );

    return {selectActiveResume};
  },
});

export const {
  name,
  reducer,
  selectResumeState,
  selectResumes,
  selectIsLoading,
  selectActiveResume,
} = resumeFeature;

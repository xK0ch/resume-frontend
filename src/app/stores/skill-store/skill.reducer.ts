import {createFeature, createReducer, on} from '@ngrx/store';
import {SkillView} from "../../../../api/src/models/skill-view";
import {SkillActions} from "./skill.actions";

interface SkillState {
  skills: SkillView[];
  isLoading: boolean;
}

export const initialState: SkillState = {
  skills: [],
  isLoading: false,
};

export const skillFeature = createFeature({
  name: 'skill',
  reducer: createReducer(
    initialState,
    on(SkillActions.loadingTriggered, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(SkillActions.loadingSuccessful, (state, {skills}) => ({
      ...state,
      skills,
      isLoading: false,
    })),
    on(SkillActions.loadingFailed, (state) => ({
      ...state,
      isLoading: false,
    }))
  ),
});

export const {
  name,
  reducer,
  selectSkills,
  selectIsLoading,
} = skillFeature;

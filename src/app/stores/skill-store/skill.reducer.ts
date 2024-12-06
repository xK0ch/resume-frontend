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
    on(SkillActions.triggered, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(SkillActions.loaded, (state, {skills}) => ({
      ...state,
      skills,
      isLoading: false,
    })),
    on(SkillActions.failed, (state) => ({
      ...state,
      isLoading: false,
    }))
  ),
});

export const {
  name,
  reducer,
  selectSkillState,
  selectSkills,
  selectIsLoading,
} = skillFeature;

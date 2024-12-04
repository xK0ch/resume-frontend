import {createAction, props} from "@ngrx/store";
import {SkillView} from "../../../../api/src/models/skill-view";

export const SkillActions = {
  triggered: createAction('[Skill] Loading skills triggered'),
  loaded: createAction('[Skill] Skills loaded successfully', props<{ skills: SkillView[] }>()),
  failed: createAction('[Skill] Loading skills failed'),
}

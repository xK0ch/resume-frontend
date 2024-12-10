import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {SkillView} from "../../../../api/src/models/skill-view";

export const SkillActions = createActionGroup({
  source: 'Skill',
  events: {
    loadingTriggered: emptyProps(),
    loadingSuccessful: props<{ skills: SkillView[] }>(),
    loadingFailed: emptyProps(),
  },
});

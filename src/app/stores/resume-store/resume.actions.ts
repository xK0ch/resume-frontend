import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {ResumeView} from "../../../../api/src/models/resume-view";

export const ResumeActions = createActionGroup({
  source: 'Resume',
  events: {
    loadingTriggered: emptyProps(),
    loadingSuccessful: props<{ resumes: ResumeView[] }>(),
    loadingFailed: emptyProps(),
  },
});

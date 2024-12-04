import {createAction, props} from "@ngrx/store";
import {ResumeView} from "../../../../api/src/models/resume-view";

export const ResumeActions = {
  triggered: createAction('[Resume] Loading resumes triggered'),
  loaded: createAction('[Resume] Resumes loaded successfully', props<{ resumes: ResumeView[] }>()),
  failed: createAction('[Resume] Loading resumes failed'),
}

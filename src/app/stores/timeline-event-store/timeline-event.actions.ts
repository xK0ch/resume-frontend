import {createAction, props} from "@ngrx/store";
import {TimelineEventView} from "../../../../api/src/models/timeline-event-view";

export const TimelineEventActions = {
  triggered: createAction('[TimelineEvent] Loading timeline events triggered'),
  loaded: createAction('[TimelineEvent] Timeline events loaded successfully', props<{
    timelineEvents: TimelineEventView[]
  }>()),
  failed: createAction('[TimelineEvent] Loading timeline events failed'),
}

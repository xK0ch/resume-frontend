import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {TimelineEventView} from "../../../../api/src/models/timeline-event-view";

export const TimelineEventActions = createActionGroup({
  source: 'TimelineEvent',
  events: {
    loadingTriggered: emptyProps(),
    loadingSuccessful: props<{ timelineEvents: TimelineEventView[] }>(),
    loadingFailed: emptyProps(),
  },
});

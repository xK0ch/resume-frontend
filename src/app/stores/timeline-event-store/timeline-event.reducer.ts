import {createFeature, createReducer, createSelector, on} from '@ngrx/store';
import {TimelineEventView} from "../../../../api/src/models/timeline-event-view";
import {TimelineEventActions} from "./timeline-event.actions";
import {NgxTimelineEvent} from "@frxjs/ngx-timeline";
import {neitherNullNorUndefined} from "@ewerk/null-or-undefined";

interface TimelineEventState {
  timelineEvents: TimelineEventView[];
  isLoading: boolean;
}

const initialState: TimelineEventState = {
  timelineEvents: [],
  isLoading: false,
};

export const timelineEventFeature = createFeature({
  name: 'timelineEvent',
  reducer: createReducer(
    initialState,
    on(TimelineEventActions.triggered, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(TimelineEventActions.loaded, (state, {timelineEvents}) => ({
      ...state,
      timelineEvents,
      isLoading: false,
    })),
    on(TimelineEventActions.failed, (state) => ({
      ...state,
      isLoading: false,
    }))
  ),
  extraSelectors: ({selectTimelineEvents}) => {
    const selectEvents = createSelector(
      selectTimelineEvents,
      (timelineEvents): NgxTimelineEvent[] => {
        if (neitherNullNorUndefined(timelineEvents)) {
          return timelineEvents.map(timelineEvent => ({
            timestamp: new Date(timelineEvent.dateOfEvent),
            title: timelineEvent.jobPosition,
            description: timelineEvent.description,
            id: timelineEvent.institution,
          }));
        }
        return [];
      }
    );


    return {selectEvents};
  },
});

export const {
  name,
  reducer,
  selectTimelineEventState,
  selectTimelineEvents,
  selectIsLoading,
  selectEvents,
} = timelineEventFeature;

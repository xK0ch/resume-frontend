import {initialState, reducer, selectEvents} from "./timeline-event.reducer";
import {TimelineEventActions} from "./timeline-event.actions";
import {MOCK_TIMELINE_EVENTS} from "../../shared/mocks/timeline-event-mocks";

describe('TimelineEvent reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {type: 'unknown'})).toEqual(initialState);
  });

  it('should set isLoading to true when "loadingTriggered" action is dispatched', () => {
    const action = TimelineEventActions.loadingTriggered();
    const state = reducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  it('should update timeline events and set isLoading to false when "loadingSuccessful" action is dispatched', () => {
    const action = TimelineEventActions.loadingSuccessful({timelineEvents: MOCK_TIMELINE_EVENTS});
    const state = reducer(initialState, action);

    expect(state.timelineEvents).toEqual(MOCK_TIMELINE_EVENTS);
    expect(state.isLoading).toBe(false);
  });

  it('should set isLoading to false when "loadingFailed" action is dispatched', () => {
    const action = TimelineEventActions.loadingFailed();
    const state = reducer(initialState, action);
    expect(state.isLoading).toBe(false);
  });


  it('should return a mapped object of NgxTimelineEvent when "selectEvents" selector is used', () => {
    const activeResume = selectEvents.projector(MOCK_TIMELINE_EVENTS);
    expect(activeResume).toEqual(
      [
        {
          description: 'Worked on developing scalable web applications and cloud solutions.',
          id: 'Tech Corp',
          timestamp: new Date('2020-05-15T00:00:00.000Z'),
          title: 'Software Engineer'
        },
        {
          description: 'Assisted in research and development of AI-driven data analysis tools.',
          id: 'University of Technology',
          timestamp: new Date('2022-09-01T00:00:00.000Z'),
          title: 'Research Assistant'
        }
      ]
    );
  });
});

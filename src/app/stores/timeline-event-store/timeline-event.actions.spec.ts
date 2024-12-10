import {TimelineEventActions} from './timeline-event.actions';
import {MOCK_TIMELINE_EVENTS} from "../../shared/mocks/timeline-event-mocks";

describe('TimelineEventActions', () => {
  it('should create a "loadingTriggered" action', () => {
    const action = TimelineEventActions.loadingTriggered();
    expect(action.type).toBe('[TimelineEvent] loadingTriggered');
  });

  it('should create a "loadingSuccessful" action with the correct payload', () => {
    const action = TimelineEventActions.loadingSuccessful({timelineEvents: MOCK_TIMELINE_EVENTS});

    expect(action.type).toBe('[TimelineEvent] loadingSuccessful');
    expect(action.timelineEvents).toEqual(MOCK_TIMELINE_EVENTS);
  });

  it('should create a "loadingFailed" action', () => {
    const action = TimelineEventActions.loadingFailed();
    expect(action.type).toBe('[TimelineEvent] loadingFailed');
  });
});

import {TimelineEventActions} from './timeline-event.actions';
import {MOCK_TIMELINE_EVENTS} from "../../shared/mocks/timeline-event-mocks";

describe('TimelineEventActions', () => {
  it('should create a "triggered" action', () => {
    const action = TimelineEventActions.triggered();
    expect(action.type).toBe('[TimelineEvent] Loading timeline events triggered');
  });

  it('should create a "loaded" action with the correct payload', () => {
    const action = TimelineEventActions.loaded({timelineEvents: MOCK_TIMELINE_EVENTS});

    expect(action.type).toBe('[TimelineEvent] Timeline events loaded successfully');
    expect(action.timelineEvents).toEqual(MOCK_TIMELINE_EVENTS);
  });

  it('should create a "failed" action', () => {
    const action = TimelineEventActions.failed();
    expect(action.type).toBe('[TimelineEvent] Loading timeline events failed');
  });
});

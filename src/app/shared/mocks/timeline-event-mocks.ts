import { TimelineEventView } from '../../../../api/src/models/timeline-event-view';

export const MOCK_TIMELINE_EVENTS: TimelineEventView[] = [
  {
    id: '1',
    dateOfEvent: '2020-05-15',
    institution: 'Tech Corp',
    jobPosition: 'Software Engineer',
    description: 'Worked on developing scalable web applications and cloud solutions.',
    lastModifiedAt: '2024-12-01T12:00:00Z',
  },
  {
    id: '2',
    dateOfEvent: '2022-09-01',
    institution: 'University of Technology',
    jobPosition: 'Research Assistant',
    description: 'Assisted in research and development of AI-driven data analysis tools.',
    lastModifiedAt: '2024-12-01T14:00:00Z',
  },
];

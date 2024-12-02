import {TestBed} from '@angular/core/testing';
import {ResumeStore} from './resume.store';
import {ResumesService} from '../../../api/src/services/resumes.service';
import {of, throwError} from 'rxjs';
import {ResumeView} from '../../../api/src/models/resume-view';

describe('ResumeStore', () => {
  let resumeStore: any;
  let resumesService: jest.Mocked<ResumesService>;

  const mockResumes: ResumeView[] = [
    {
      id: '1',
      firstName: 'Alice',
      lastName: 'Smith',
      address: '123 Maple Street',
      city: 'Springfield',
      country: 'USA',
      postalCode: '12345',
      dateOfBirth: '1990-05-15',
      description: 'An experienced software developer with a passion for creating innovative solutions.',
      email: 'alice.smith@example.com',
      github: 'https://github.com/alicesmith',
      linkedin: 'https://linkedin.com/in/alicesmith',
      mobileNumber: '+1 555-123-4567',
      phoneNumber: '+1 555-765-4321',
      lastModifiedAt: '2024-12-01T10:00:00Z',
      sex: 'FEMALE',
      status: 'INACTIVE',
    },
    {
      id: '2',
      firstName: 'Bob',
      lastName: 'Johnson',
      address: '456 Oak Avenue',
      city: 'Metropolis',
      country: 'Canada',
      postalCode: '67890',
      dateOfBirth: '1985-10-20',
      description: 'A skilled engineer specializing in cloud computing and DevOps practices.',
      email: 'bob.johnson@example.com',
      github: 'https://github.com/bobjohnson',
      linkedin: 'https://linkedin.com/in/bobjohnson',
      mobileNumber: '+1 555-987-6543',
      phoneNumber: '+1 555-345-6789',
      lastModifiedAt: '2024-12-01T11:00:00Z',
      sex: 'MALE',
      status: 'ACTIVE',
    },
  ];

  beforeEach(() => {
    const resumesServiceMock = {
      getAll: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        ResumeStore,
        {provide: ResumesService, useValue: resumesServiceMock},
      ],
    });

    resumeStore = TestBed.inject(ResumeStore);
    resumesService = TestBed.inject(ResumesService) as jest.Mocked<ResumesService>;
  });

  it('should load resumes successfully', () => {
    resumesService.getAll.mockReturnValue(of(mockResumes));

    resumeStore.loadResumes();

    expect(resumesService.getAll).toHaveBeenCalled();
    expect(resumeStore.isLoading()).toBe(true);
  });

  it('should handle error when loading resumes fails', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {
    });
    resumesService.getAll.mockReturnValue(throwError(() => new Error('Error loading resumes')));

    resumeStore.loadResumes();

    expect(resumesService.getAll).toHaveBeenCalled();
    expect(resumeStore.resumes()).toEqual([]);
    expect(resumeStore.isLoading()).toBe(true);

    consoleErrorSpy.mockRestore();
  });
});

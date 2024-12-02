import {TestBed} from '@angular/core/testing';
import {SkillStore} from './skill.store';
import {SkillsService} from '../../../api/src/services/skills.service';
import {ResumeStore} from './resume.store';
import {of, throwError} from 'rxjs';
import {SkillView} from '../../../api/src/models/skill-view';

describe('SkillStore', () => {
    let skillStore: any;
    let skillsService: jest.Mocked<SkillsService>;
    let resumeStore: jest.Mocked<any>;

    const mockSkills: SkillView[] = [
        {
            id: '1',
            lastModifiedAt: '2024-12-01T12:00:00Z',
            name: 'JavaScript',
            skillCategory: 'PROGRAMMING_LANGUAGE',
            skillLevel: 'EXPERT',
        },
        {
            id: '2',
            lastModifiedAt: '2024-12-01T13:00:00Z',
            name: 'Docker',
            skillCategory: 'CI_CD',
            skillLevel: 'ADVANCED',
        },
        {
            id: '3',
            lastModifiedAt: '2024-12-01T14:00:00Z',
            name: 'Angular',
            skillCategory: 'FRAMEWORK',
            skillLevel: 'EXPERT',
        },
        {
            id: '4',
            lastModifiedAt: '2024-12-01T15:00:00Z',
            name: 'Kubernetes',
            skillCategory: 'CLOUD',
            skillLevel: 'INTERMEDIATE',
        },
        {
            id: '5',
            lastModifiedAt: '2024-12-01T16:00:00Z',
            name: 'Linux',
            skillCategory: 'OPERATING_SYSTEM',
            skillLevel: 'ADVANCED',
        },
        {
            id: '6',
            lastModifiedAt: '2024-12-01T17:00:00Z',
            name: 'Public Speaking',
            skillCategory: 'OTHER',
            skillLevel: 'ADVANCED_BEGINNER',
        },
    ];


    beforeEach(() => {
        const skillsServiceMock = {
            getAllByResume: jest.fn(),
        };

        const resumeStoreMock = {
            activeResume: jest.fn(),
        };

        TestBed.configureTestingModule({
            providers: [
                SkillStore,
                {provide: SkillsService, useValue: skillsServiceMock},
                {provide: ResumeStore, useValue: resumeStoreMock},
            ],
        });

        skillStore = TestBed.inject(SkillStore);
        skillsService = TestBed.inject(SkillsService) as jest.Mocked<SkillsService>;
        resumeStore = TestBed.inject(ResumeStore) as jest.Mocked<any>;
    });

    it('should load skills successfully when activeResume is present', () => {
        resumeStore.activeResume.mockReturnValue({id: '2', name: 'Resume 2', status: 'ACTIVE'});
        skillsService.getAllByResume.mockReturnValue(of(mockSkills));

        skillStore.loadSkills();

        expect(resumeStore.activeResume).toHaveBeenCalled();
        expect(skillStore.isLoading()).toBe(false);
    });

    it('should handle error when loading skills fails', () => {
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {
        });
        resumeStore.activeResume.mockReturnValue({id: '2', name: 'Resume 2', status: 'ACTIVE'});
        skillsService.getAllByResume.mockReturnValue(throwError(() => new Error('Error loading skills')));

        skillStore.loadSkills();

        expect(resumeStore.activeResume).toHaveBeenCalled();
        expect(skillStore.skills()).toEqual([]);
        expect(skillStore.isLoading()).toBe(false);

        consoleErrorSpy.mockRestore();
    });

    it('should not call API if no activeResume is present', () => {
        resumeStore.activeResume.mockReturnValue(null);

        skillStore.loadSkills();

        expect(resumeStore.activeResume).toHaveBeenCalled();
        expect(skillsService.getAllByResume).not.toHaveBeenCalled();
        expect(skillStore.skills()).toEqual([]);
        expect(skillStore.isLoading()).toBe(false);
    });
});

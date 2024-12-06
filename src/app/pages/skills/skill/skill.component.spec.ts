import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillComponent } from './skill.component';
import { SkillView } from "../../../../../api/src/models/skill-view";
import {MatProgressBar, MatProgressBarModule} from "@angular/material/progress-bar";
import { getTranslocoModule } from "../../../transloco-testing.module";
import { By } from '@angular/platform-browser';
import {MOCK_SKILLS} from "../../../shared/mocks/skill-mocks";

describe('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        getTranslocoModule(),
        MatProgressBarModule
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillComponent);
    component = fixture.componentInstance;
    component.skill = MOCK_SKILLS[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize skillProgress based on skillLevel', () => {
    expect(component.skillProgress).toBe(100);
  });

  it('should return correct CSS class for skill level', () => {
    expect(component.getSkillLevelClass('NOVICE')).toBe('skill-progress-novice');
    expect(component.getSkillLevelClass('ADVANCED_BEGINNER')).toBe('skill-progress-advanced-beginner');
    expect(component.getSkillLevelClass('INTERMEDIATE')).toBe('skill-progress-intermediate');
    expect(component.getSkillLevelClass('ADVANCED')).toBe('skill-progress-advanced');
    expect(component.getSkillLevelClass('EXPERT')).toBe('skill-progress-expert');
  });
});

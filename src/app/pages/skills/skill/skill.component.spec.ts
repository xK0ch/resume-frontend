import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SkillComponent} from './skill.component';
import {SkillView} from "../../../../../api/src/models/skill-view";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {getTranslocoModule} from "../../../transloco-testing.module";

describe('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  const mockSkill: SkillView = {
    id: '1',
    lastModifiedAt: '2024-10-31T12:00:00Z',
    name: 'Angular',
    skillLevel: 'EXPERT',
    skillCategory: 'OTHER'
  };

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
    component.skill = mockSkill;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

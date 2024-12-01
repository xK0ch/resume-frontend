import {Component, Input, OnInit} from '@angular/core';
import {SkillView} from "../../../../../api/src/models/skill-view";
import {MatProgressBar} from "@angular/material/progress-bar";
import {TranslocoDirective} from "@jsverse/transloco";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [
    MatProgressBar,
    NgClass,
    TranslocoDirective,
  ],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent implements OnInit {

  @Input() skill!: SkillView;

  skillLevelMap: { [key in SkillView['skillLevel']]: number } = {
    NOVICE: 20,
    ADVANCED_BEGINNER: 40,
    INTERMEDIATE: 60,
    ADVANCED: 80,
    EXPERT: 100
  };

  skillProgress: number = 0;

  ngOnInit(): void {
    this.skillProgress = this.skillLevelMap[this.skill.skillLevel];
  }

  getSkillLevelClass(skillLevel: SkillView['skillLevel']): string {
    switch (skillLevel) {
      case 'NOVICE':
        return 'skill-progress-novice';
      case 'ADVANCED_BEGINNER':
        return 'skill-progress-advanced-beginner';
      case 'INTERMEDIATE':
        return 'skill-progress-intermediate';
      case 'ADVANCED':
        return 'skill-progress-advanced';
      case 'EXPERT':
        return 'skill-progress-expert';
      default:
        return '';
    }
  }
}

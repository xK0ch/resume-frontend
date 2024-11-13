import {Component, inject} from '@angular/core';
import {SkillStore} from "../../stores/skill.store";
import {DateFormatPipe} from "../../shared/pipes/date-format.pipe";
import {DefaultValuePipe} from "../../shared/pipes/default-value.pipe";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NgOptimizedImage} from "@angular/common";
import {SkillComponent} from "../../shared/components/skill/skill.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    DateFormatPipe,
    DefaultValuePipe,
    MatProgressSpinner,
    NgOptimizedImage,
    SkillComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skillStore = inject(SkillStore);
}

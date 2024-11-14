import {Component, inject} from '@angular/core';
import {SkillStore} from "../../stores/skill.store";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {SkillComponent} from "../../shared/components/skill/skill.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    MatProgressSpinner,
    SkillComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skillStore = inject(SkillStore);
}

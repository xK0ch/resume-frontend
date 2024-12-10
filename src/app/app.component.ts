import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavigationBarComponent} from "./shared/components/navigation-bar/navigation-bar.component";
import {Store} from "@ngrx/store";
import {ResumeActions} from "./stores/resume-store/resume.actions";
import {SkillActions} from "./stores/skill-store/skill.actions";
import {TimelineComponent} from "./pages/timeline/timeline.component";
import {TimelineEventActions} from "./stores/timeline-event-store/timeline-event.actions";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}

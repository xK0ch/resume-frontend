import {Routes} from '@angular/router';

import {OverviewComponent} from "./pages/overview/overview.component";
import {SkillsComponent} from "./pages/skills/skills.component";
import {TimelineComponent} from "./pages/timeline/timeline.component";

export const OVERVIEW_SLUG = 'overview';
export const SKILLS_SLUG = 'skills';
export const TIMELINE_SLUG = 'timeline';

export const routes: Routes = [
  {
    path: '',
    redirectTo: OVERVIEW_SLUG,
    pathMatch: 'full',
  },
  {
    path: OVERVIEW_SLUG,
    component: OverviewComponent,
  },
  {
    path: SKILLS_SLUG,
    component: SkillsComponent,
  },
  {
    path: TIMELINE_SLUG,
    component: TimelineComponent,
  },
];

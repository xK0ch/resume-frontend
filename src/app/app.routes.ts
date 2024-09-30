import { Routes } from '@angular/router';

import { ResumeOverviewComponent } from './pages/resume-overview/resume-overview.component';

export const RESUME_OVERVIEW_SLUG = 'resume-overview';

export const routes: Routes = [
  {
    path: '',
    redirectTo: RESUME_OVERVIEW_SLUG,
    pathMatch: 'full',
  },
  {
    path: RESUME_OVERVIEW_SLUG,
    component: ResumeOverviewComponent,
  },
];

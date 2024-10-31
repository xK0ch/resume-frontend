import { Routes } from '@angular/router';

import { ResumeOverviewComponent } from './pages/resume-overview/resume-overview.component';
import {OverviewComponent} from "./pages/overview/overview.component";

export const OVERVIEW_SLUG = 'overview';

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
];

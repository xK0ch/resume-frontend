import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';

import { RouterStore } from '../../stores/router.store';

@Component({
  selector: 'app-resume-overview',
  standalone: true,
  imports: [],
  templateUrl: './resume-overview.component.html',
  styleUrl: './resume-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeOverviewComponent {

  routerStore = inject(RouterStore);

}

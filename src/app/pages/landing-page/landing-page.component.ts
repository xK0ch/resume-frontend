import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';

import { ResumeStore } from '../../stores/resume.store';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent implements OnInit {

  readonly resumeStore = inject(ResumeStore);

  ngOnInit(): void {
    this.resumeStore.loadResumes();
  }
}

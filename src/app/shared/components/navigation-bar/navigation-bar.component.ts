import {Component, inject} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {ResumeStore} from "../../../stores/resume.store";
import {ionBulb, ionGitCommit, ionLogoGithub, ionLogoLinkedin, ionMenu, ionPerson} from "@ng-icons/ionicons";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {RouterLink} from "@angular/router";
import {OVERVIEW_SLUG, SKILLS_SLUG, TIMELINE_SLUG} from "../../../app.routes";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {PushPipe} from '@ngrx/component';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    MatButton,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatToolbar,
    NgIcon,
    PushPipe,
    RouterLink,
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
  viewProviders: [
    provideIcons({
      ionBulb,
      ionGitCommit,
      ionLogoGithub,
      ionLogoLinkedin,
      ionMenu,
      ionPerson,
    }),
  ],
})
export class NavigationBarComponent {

  OVERVIEW_SLUG: string = OVERVIEW_SLUG
  SKILLS_SLUG: string = SKILLS_SLUG;
  TIMELINE_SLUG: string = TIMELINE_SLUG;

  resumeStore = inject(ResumeStore);
  breakpointObserver = inject(BreakpointObserver);

  isSmallScreen$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Handset]).pipe(
    map(result => result.matches)
  );

  openExternalLink(url: string | undefined): void {
    window.open(url, '_blank');
  }
}

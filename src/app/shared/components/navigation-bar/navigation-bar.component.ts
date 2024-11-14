import {Component, inject} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {ionBulb, ionGitCommit, ionMenu, ionPerson} from "@ng-icons/ionicons";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {RouterLink} from "@angular/router";
import {OVERVIEW_SLUG, SKILLS_SLUG, TIMELINE_SLUG} from "../../../app.routes";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {PushPipe} from '@ngrx/component';
import {LanguageSwitcherComponent} from "./language-switcher/language-switcher.component";
import {TranslocoDirective} from "@jsverse/transloco";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    LanguageSwitcherComponent,
    MatButton,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatToolbar,
    NgIcon,
    PushPipe,
    RouterLink,
    TranslocoDirective
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
  viewProviders: [
    provideIcons({
      ionBulb,
      ionGitCommit,
      ionMenu,
      ionPerson,
    }),
  ],
})
export class NavigationBarComponent {

  OVERVIEW_SLUG: string = OVERVIEW_SLUG
  SKILLS_SLUG: string = SKILLS_SLUG;
  TIMELINE_SLUG: string = TIMELINE_SLUG;

  breakpointObserver = inject(BreakpointObserver);

  isSmallScreen$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Handset]).pipe(
    map(result => result.matches)
  );
}

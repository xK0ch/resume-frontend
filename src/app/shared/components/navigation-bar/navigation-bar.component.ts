import {Component, inject, OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {ResumeStore} from "../../../stores/resume.store";
import {simpleGithub, simpleLinkedin} from "@ng-icons/simple-icons";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {RouterLink} from "@angular/router";
import {OVERVIEW_SLUG, SKILLS_SLUG, TIMELINE_SLUG} from "../../../app.routes";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatButton,
    MatIconButton,
    NgIcon,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    RouterLink,
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
  viewProviders: [
    provideIcons({
      simpleGithub,
      simpleLinkedin,
    }),
  ],
})
export class NavigationBarComponent implements OnInit {

  isSmallScreen = false;

  OVERVIEW_SLUG: string = OVERVIEW_SLUG
  SKILLS_SLUG: string = SKILLS_SLUG;
  TIMELINE_SLUG: string= TIMELINE_SLUG;

  resumeStore = inject(ResumeStore);
  breakpointObserver = inject(BreakpointObserver);

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Handset])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
      });
  }

  openExternalLink(url: string | undefined): void {
    window.open(url, '_blank');
  }
}

import {Component, inject} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {ResumeStore} from "../../../stores/resume.store";
import {simpleGithub, simpleLinkedin} from "@ng-icons/simple-icons";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatButton,
    MatIconButton,
    NgIcon,
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
export class NavigationBarComponent {

  resumeStore = inject(ResumeStore);

  openExternalLink(url: string | undefined): void {
    window.open(url, '_blank');
  }
}

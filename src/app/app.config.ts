import {provideHttpClient} from '@angular/common/http';
import {ApplicationConfig, importProvidersFrom, isDevMode, provideZoneChangeDetection} from '@angular/core';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideRouter} from '@angular/router';
import {ApiModule} from '../../api/src/api.module';
import {environment} from '../environments/environment';
import {routes} from './app.routes';
import {TranslocoHttpLoader} from './transloco-loader';
import {provideTransloco} from '@jsverse/transloco';
import {provideState, provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {resumeFeature} from "./stores/resume-store/resume.reducer";
import {ResumeEffects} from "./stores/resume-store/resume.effects";
import {skillFeature} from "./stores/skill-store/skill.reducer";
import {timelineEventFeature} from "./stores/timeline-event-store/timeline-event.reducer";
import {SkillEffects} from "./stores/skill-store/skill.effects";
import {TimelineEventEffects} from "./stores/timeline-event-store/timeline-event.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(ApiModule.forRoot({rootUrl: environment.apiUrl})),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideRouter(routes),
    provideStore(),
    provideState(resumeFeature),
    provideState(skillFeature),
    provideState(timelineEventFeature),
    provideEffects(ResumeEffects, SkillEffects, TimelineEventEffects),
    provideTransloco({
      config: {
        availableLangs: ['de', 'en'],
        defaultLang: 'de',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    }),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideEffects()
  ],
};

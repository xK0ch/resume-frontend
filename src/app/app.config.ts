import {provideHttpClient} from '@angular/common/http';
import {ApplicationConfig, importProvidersFrom, isDevMode, provideZoneChangeDetection} from '@angular/core';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideRouter} from '@angular/router';
import {ApiModule} from '../../api/src/api.module';
import {environment} from '../environments/environment';
import {routes} from './app.routes';
import {TranslocoHttpLoader} from './transloco-loader';
import {provideTransloco} from '@jsverse/transloco';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(ApiModule.forRoot({rootUrl: environment.apiUrl})),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideRouter(routes),
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
  ],
};

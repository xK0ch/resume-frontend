import {
  TranslocoTestingModule,
  TranslocoTestingOptions,
} from '@jsverse/transloco';
import de from '../assets/i18n/de.json';
import en from '../assets/i18n/en.json';

export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
  return TranslocoTestingModule.forRoot({
    langs: { de, en },
    translocoConfig: {
      availableLangs: ['de', 'en'],
      defaultLang: 'de',
    },
    preloadLangs: true,
    ...options,
  });
}

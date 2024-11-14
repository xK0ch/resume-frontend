import {Component} from '@angular/core';
import {TranslocoDirective, TranslocoService} from '@jsverse/transloco';
import {MatFormField, MatLabel, MatOption, MatSelect, MatSelectTrigger} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    MatSelectTrigger,
    NgOptimizedImage,
    TranslocoDirective
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
})
export class LanguageSwitcherComponent {
  currentLang: string;
  languages: string[];

  flagMappings: { [key: string]: string } = {
    de: 'DE',
    en: 'US'
  };

  constructor(private translocoService: TranslocoService) {
    this.currentLang = this.translocoService.getDefaultLang();
    const availableLangs = this.translocoService.getAvailableLangs();

    if (Array.isArray(availableLangs) && typeof availableLangs[0] === 'string') {
      this.languages = availableLangs as string[];
    } else {
      this.languages = (availableLangs as { id: string; label: string }[]).map(lang => lang.id);
    }
  }

  onChange(langCode: string): void {
    this.translocoService.setActiveLang(langCode);
    this.currentLang = langCode;
  }

  getFlagUrl(lang: string): string {
    return `http://purecatamphetamine.github.io/country-flag-icons/3x2/${this.flagMappings[lang]}.svg`;
  }
}

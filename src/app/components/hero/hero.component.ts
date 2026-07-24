import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  langService = inject(LanguageService);

  // Devuelve la ruta correcta del archivo según el idioma actual
  get cvUrl(): string {
  return this.langService.currentLang() === 'es'
    ? '/assets/CV_FullStackDev_JosePereda_ESP.pdf'
    : '/assets/CV_FullStackDev_JosePereda_ENG.pdf';
}
}
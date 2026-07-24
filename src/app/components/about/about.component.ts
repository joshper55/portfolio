import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-about',
    imports: [CommonModule, ScrollRevealDirective],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent {
  langService = inject(LanguageService);

  stats = [
    { 
      value: '4+', 
      label: { es: 'Años de experiencia', en: 'Years of experience' } 
    },
    { 
      value: '6', 
      label: { es: 'Proyectos empresariales', en: 'Enterprise projects' } 
    },
    { 
      value: '3', 
      label: { es: 'Lenguajes backend', en: 'Backend languages' } 
    },
  ];
}
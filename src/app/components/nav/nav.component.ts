import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-nav',
    imports: [CommonModule],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css'
})
export class NavComponent {
  isOpen = false;
  isScrolled = false;
  langService = inject(LanguageService);

  // Un getter para alternar las etiquetas según el signal de idioma
  get links() {
    return this.langService.currentLang() === 'es' 
      ? [
          { href: '#about', label: 'Sobre mí' },
          { href: '#skills', label: 'Skills' },
          { href: '#projects', label: 'Proyectos' },
          { href: '#experience', label: 'Experiencia' },
          { href: '#contact', label: 'Contacto' },
        ]
      : [
          { href: '#about', label: 'About me' },
          { href: '#skills', label: 'Skills' },
          { href: '#projects', label: 'Projects' },
          { href: '#experience', label: 'Experience' },
          { href: '#contact', label: 'Contact' },
        ];
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  close() {
    this.isOpen = false;
  }
}
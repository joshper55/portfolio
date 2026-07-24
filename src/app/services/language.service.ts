// src/app/services/language.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  // Inicializamos el signal con el idioma guardado o por defecto 'es'
  currentLang = signal<'es' | 'en'>((localStorage.getItem('lang') as 'es' | 'en') || 'es');

  // Método para alternar entre idiomas
  toggleLanguage() {
    const newLang = this.currentLang() === 'es' ? 'en' : 'es';
    this.currentLang.set(newLang);
    localStorage.setItem('lang', newLang); // Guarda la preferencia del usuario
  }
}
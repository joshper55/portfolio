import { Component, inject } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  // Inyectamos el servicio de idiomas
  langService = inject(LanguageService);
}
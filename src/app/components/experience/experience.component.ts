import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EXPERIENCE } from '../../data/portfolio-data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  langService = inject(LanguageService);
  experience = EXPERIENCE;
}
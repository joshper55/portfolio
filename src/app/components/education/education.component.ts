import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EDUCATION } from '../../data/portfolio-data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  langService = inject(LanguageService);
  education = EDUCATION;
}
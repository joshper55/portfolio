import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SKILLS } from '../../data/portfolio-data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  langService = inject(LanguageService);
  skills = SKILLS;
}
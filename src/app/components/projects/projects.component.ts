import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PROJECTS } from '../../data/portfolio-data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  langService = inject(LanguageService);
  projects = PROJECTS;
  expandedId: string | null = null;

  toggle(id: string) {
    this.expandedId = this.expandedId === id ? null : id;
  }

  isExpanded(id: string) {
    return this.expandedId === id;
  }
}
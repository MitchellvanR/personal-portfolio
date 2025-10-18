import { Component, Input } from '@angular/core';
import { SkillCard } from './skill-card/skill-card';
import { TRANSLATIONS } from '../translations';

@Component({
  selector: 'app-skills',
  imports: [SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  @Input() activeLanguage: 'NL' | 'EN' = 'NL'

  skillLogos = ['python.png', 'java.png', 'angular.png', 'sql.png', 'aws.webp']

  get text() {
    return TRANSLATIONS[this.activeLanguage].skills
  }
}

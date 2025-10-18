import { Component, Input } from '@angular/core';
import { TRANSLATIONS } from '../translations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  @Input() activeLanguage: 'NL' | 'EN' = 'NL'
  
  project_images = ['arag.png', 'politie.png', 'jdi.jpg', 'NotS.png', 'alliander.png', 'openvalue.png']

  activeNode = this.project_images.length - 1

  get text() {
    return TRANSLATIONS[this.activeLanguage].experience
  }

  onNodeActivation(i: number) {
    this.activeNode = i
  }

}

import { Component, Input } from '@angular/core';
import { TRANSLATIONS } from '../translations';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  @Input() activeLanguage: 'NL' | 'EN' = 'NL'
  
  project_images = ['arag.png', 'politie.png', 'jdi.jpg', 'NotS.png', 'alliander.png', 'openvalue.png']

  activeNode = this.project_images.length - 1

  get text() {
    return TRANSLATIONS[this.activeLanguage].contact
  }

  onNodeActivation(i: number) {
    this.activeNode = i
  }
}

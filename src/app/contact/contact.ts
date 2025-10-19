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

  get text() {
    return TRANSLATIONS[this.activeLanguage].contact
  }

  get resumePath(): string {
    const langSuffix = this.activeLanguage
    return `assets/files/Mitchell-van-Rijswijk-CV-${langSuffix}.pdf`
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = this.resumePath;
    link.download = `Mitchell-van-Rijswijk-CV-${this.activeLanguage}.pdf`;
    link.click();
  }
}

import { Component, Input } from '@angular/core';
import { TRANSLATIONS } from '../translations';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  @Input() activeLanguage: 'NL' | 'EN' = 'NL'

  get text() {
    return TRANSLATIONS[this.activeLanguage].about
  }
}

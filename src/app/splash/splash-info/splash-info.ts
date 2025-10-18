import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TRANSLATIONS } from '../../translations';

@Component({
  selector: 'app-splash-info',
  imports: [],
  templateUrl: './splash-info.html',
  styleUrl: './splash-info.css'
})
export class SplashInfo {
  @Input() activeLanguage: 'NL'| 'EN' = 'NL'

  @Output() sectionChange = new EventEmitter<number>()

  constructor(private scroller: ViewportScroller) {}

  get text() {
    return TRANSLATIONS[this.activeLanguage].splash
  }

  scrollToAbout() {
    this.scroller.scrollToAnchor("targetAbout")
    this.sectionChange.emit(1)
  }
}

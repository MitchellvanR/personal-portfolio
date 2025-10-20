import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { TRANSLATIONS } from '../translations';
import { MobileNavigation } from './mobile-navigation/mobile-navigation';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, MobileNavigation],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css'
})
export class Navigation {
  @Input() activeSectionIndex!: number;
  @Input() theme: 'light' | 'dark' = 'light'
  @Input() activeLanguage: 'NL' | 'EN' = 'NL'

  @Output() sectionChange = new EventEmitter<number>()
  @Output() languageChange = new EventEmitter<'NL' | 'EN'>()

  sections = [
    {text: 'Home', target: "targetSplash"}, 
    {text: 'About me', target: "targetAbout"}, 
    {text: 'Experience', target: "targetExperience"}, 
    {text: 'Skills', target: "targetSkills"}, 
    {text: 'Contact', target: "targetContact"}
  ]

  constructor(private scroller: ViewportScroller) {}

  get text() {
    return TRANSLATIONS[this.activeLanguage].navigation
  }

  get isSplash(): boolean {
    return this.activeSectionIndex === 0;
  }

  toggleLanguage(lang: 'NL' | 'EN') {
    this.languageChange.emit(lang)
  }

  scrollToSection(index: number) {
    this.scroller.scrollToAnchor(this.sections[index].target)
    this.sectionChange.emit(index)
  }
}

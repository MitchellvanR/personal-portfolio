import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-navigation',
  imports: [CommonModule],
  templateUrl: './mobile-navigation.html',
  styleUrl: './mobile-navigation.css'
})
export class MobileNavigation {
  @Input() navigationItems!: Array<{text: string, target: string}>
  @Input() text!: any
  @Input() activeSectionIndex!: number
  @Input() activeLanguage: 'NL' | 'EN' = 'NL'

  @Output() sectionChange = new EventEmitter<number>()
  @Output() languageChange = new EventEmitter<'NL' | 'EN'>()

  menuOpen = false

  constructor(private scroller: ViewportScroller) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen
  }

  handleSectionClick(index: number) {
    this.scrollToSection(index)
    this.menuOpen = false
  }

  toggleLanguage(lang: 'NL' | 'EN') {
    this.languageChange.emit(lang)
  }

  private scrollToSection(index: number) {
    this.scroller.scrollToAnchor(this.navigationItems[index].target)
    this.sectionChange.emit(index)
  }
}

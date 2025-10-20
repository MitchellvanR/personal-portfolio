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
  
  @Output() sectionChange = new EventEmitter<number>()
  
  constructor(private scroller: ViewportScroller) {}

  scrollToSection(index: number) {
    this.scroller.scrollToAnchor(this.navigationItems[index].target)
    this.sectionChange.emit(index)
  }
}

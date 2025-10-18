import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { Splash } from './splash/splash'
import { About } from "./about/about";
import { Skills } from "./skills/skills";
import { Navigation } from "./navigation/navigation";
import { Experience } from "./experience/experience";
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    Splash,
    About,
    Skills,
    Navigation,
    Experience,
    Contact
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'harbour-portfolio'
  sections: HTMLElement[] = []
  currentSectionIndex = 0
  isScrolling = false
  currentTheme: 'light' | 'dark' = 'dark'
  activeLanguage: 'NL' | 'EN' = 'NL'

  constructor(private cdr: ChangeDetectorRef) {
    const savedLang = localStorage.getItem('activeLanguage') as 'NL' | 'EN' | null
    if (savedLang) {
      this.activeLanguage = savedLang
    }
  }

  ngAfterViewInit() {
    this.sections = Array.from(document.querySelectorAll('main article')) as HTMLElement[]

    const savedIndex = sessionStorage.getItem('currentSectionIndex')
    if (savedIndex) {
      this.currentSectionIndex = +savedIndex
      this.scrollToCurrent()
      this.cdr.detectChanges()
    }

    window.addEventListener('scroll', () => {
      const rect = this.sections[this.currentSectionIndex].getBoundingClientRect();
      if (Math.abs(rect.top) < 1) {
        this.isScrolling = false
      }
    });

    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('currentSectionIndex', this.currentSectionIndex.toString())
    });
  }

  onSectionChange(index: number) {
    this.currentSectionIndex = index
    const theme = this.sections[index].dataset['theme'] as 'light' | 'dark'
    this.currentTheme = theme || 'light'
  }

  onLanguageChange(lang: 'NL' | 'EN') {
    this.activeLanguage = lang
    localStorage.setItem('activeLanguage', lang)
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    event.preventDefault()

    if (this.isScrolling) return

    this.isScrolling = true

    if (event.deltaY > 0) {
      this.nextSection(true)
    } else {
      this.previousSection(true)
    }
  }

  nextSection(fromWheel: boolean = false) {
    if (this.currentSectionIndex < this.sections.length - 1) {
      this.currentSectionIndex++
      this.scrollToCurrent(fromWheel)
    } else if (fromWheel) {
      this.isScrolling = false
    }
  }

  previousSection(fromWheel: boolean = false) {
    if (this.currentSectionIndex > 0) {
      this.currentSectionIndex--
      this.scrollToCurrent(fromWheel)
    } else if (fromWheel) {
      this.isScrolling = false
    }
  }

  scrollToCurrent(fromWheel: boolean = false) {
    const currentSection = this.sections[this.currentSectionIndex]
    currentSection.scrollIntoView({ behavior: 'smooth' })

    const theme = currentSection.dataset['theme'] as 'light' | 'dark'
    this.currentTheme = theme || 'light'

    if (fromWheel) {
      this.isScrolling = true

      const onScroll = () => {
        const rect = currentSection.getBoundingClientRect()
        if (Math.abs(rect.top) < 1) {
          this.isScrolling = false
          window.removeEventListener('scroll', onScroll)
        }
      }

      window.addEventListener('scroll', onScroll)
    }
  }
}

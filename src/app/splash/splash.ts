import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SplashInfo } from "./splash-info/splash-info";
import { SplashPhoto } from "./splash-photo/splash-photo";

@Component({
  selector: 'app-splash',
  imports: [SplashInfo, SplashPhoto],
  templateUrl: './splash.html',
  styleUrl: './splash.css'
})
export class Splash {
  @Input() activeLanguage: 'NL' | 'EN' = 'NL'

  @Output() sectionChange = new EventEmitter<number>()

  onSplashInfoSectionChange(index: number) {
    this.sectionChange.emit(index)
  }
}

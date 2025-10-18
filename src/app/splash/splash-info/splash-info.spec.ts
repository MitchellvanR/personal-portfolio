import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashInfo } from './splash-info';

describe('SplashInfo', () => {
  let component: SplashInfo;
  let fixture: ComponentFixture<SplashInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplashInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplashInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

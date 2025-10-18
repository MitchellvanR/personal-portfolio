import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashPhoto } from './splash-photo';

describe('SplashPhoto', () => {
  let component: SplashPhoto;
  let fixture: ComponentFixture<SplashPhoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplashPhoto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplashPhoto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

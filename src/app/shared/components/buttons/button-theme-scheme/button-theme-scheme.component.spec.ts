import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonThemeSchemeComponent } from './button-theme-scheme.component';

describe('ThemeSwitcherComponent', () => {
  let component: ButtonThemeSchemeComponent;
  let fixture: ComponentFixture<ButtonThemeSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonThemeSchemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonThemeSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeLoadingIconComponent } from './theme-loading-icon.component';

describe('LoadingIconComponent', () => {
  let component: ThemeLoadingIconComponent;
  let fixture: ComponentFixture<ThemeLoadingIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeLoadingIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeLoadingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

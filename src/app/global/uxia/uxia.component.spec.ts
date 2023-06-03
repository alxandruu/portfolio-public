import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxiaComponent } from './uxia.component';

describe('UxiaComponent', () => {
  let component: UxiaComponent;
  let fixture: ComponentFixture<UxiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UxiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UxiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

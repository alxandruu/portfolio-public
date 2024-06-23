import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmoComponent } from './admin-selector.component';

describe('AmoComponent', () => {
  let component: AmoComponent;
  let fixture: ComponentFixture<AmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBedComponent } from './icon-bed.component';

describe('IconBedComponent', () => {
  let component: IconBedComponent;
  let fixture: ComponentFixture<IconBedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconBedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

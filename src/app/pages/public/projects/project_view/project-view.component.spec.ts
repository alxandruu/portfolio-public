import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrViewComponent } from './project-view.component';

describe('PrViewComponent', () => {
  let component: PrViewComponent;
  let fixture: ComponentFixture<PrViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

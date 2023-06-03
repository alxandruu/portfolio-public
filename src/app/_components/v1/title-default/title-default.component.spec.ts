import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDefaultComponent } from './title-default.component';

describe('TitleComponent', () => {
  let component: TitleDefaultComponent;
  let fixture: ComponentFixture<TitleDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

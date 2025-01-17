import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorLanguageComponent } from './selector-language.component';

describe('SelectorLanguageComponent', () => {
  let component: SelectorLanguageComponent;
  let fixture: ComponentFixture<SelectorLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorLanguageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

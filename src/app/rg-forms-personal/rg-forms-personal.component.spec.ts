import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgFormsPersonalComponent } from './rg-forms-personal.component';

describe('RgFormsPersonalComponent', () => {
  let component: RgFormsPersonalComponent;
  let fixture: ComponentFixture<RgFormsPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgFormsPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgFormsPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

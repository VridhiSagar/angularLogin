import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgFormsPasswordComponent } from './rg-forms-password.component';

describe('RgFormsPasswordComponent', () => {
  let component: RgFormsPasswordComponent;
  let fixture: ComponentFixture<RgFormsPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgFormsPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgFormsPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

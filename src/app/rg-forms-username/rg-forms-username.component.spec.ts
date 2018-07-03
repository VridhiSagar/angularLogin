import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgFormsUsernameComponent } from './rg-forms-username.component';

describe('RgFormsUsernameComponent', () => {
  let component: RgFormsUsernameComponent;
  let fixture: ComponentFixture<RgFormsUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgFormsUsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgFormsUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

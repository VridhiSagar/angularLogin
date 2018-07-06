import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { RgFormsUsernameComponent } from '../rg-forms-username/rg-forms-username.component';
import { RgFormsPersonalComponent } from '../rg-forms-personal/rg-forms-personal.component';
import { RgFormsPasswordComponent } from '../rg-forms-password/rg-forms-password.component';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent, RgFormsUsernameComponent,  RgFormsPersonalComponent,  RgFormsPasswordComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavLink2Component } from './sidenav-link2.component';

describe('SidenavLink2Component', () => {
  let component: SidenavLink2Component;
  let fixture: ComponentFixture<SidenavLink2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavLink2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavLink2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavLink1Component } from './sidenav-link1.component';

describe('SidenavLink1Component', () => {
  let component: SidenavLink1Component;
  let fixture: ComponentFixture<SidenavLink1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavLink1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavLink1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

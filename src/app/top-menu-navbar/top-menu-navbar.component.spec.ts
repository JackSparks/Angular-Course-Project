import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuNavbarComponent } from './top-menu-navbar.component';

describe('TopMenuNavbarComponent', () => {
  let component: TopMenuNavbarComponent;
  let fixture: ComponentFixture<TopMenuNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMenuNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SxrLoginComponent } from './sxr-login.component';

describe('SxrLoginComponent', () => {
  let component: SxrLoginComponent;
  let fixture: ComponentFixture<SxrLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SxrLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SxrLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

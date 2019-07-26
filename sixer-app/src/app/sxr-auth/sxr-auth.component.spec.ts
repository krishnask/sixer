import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SxrAuthComponent } from './sxr-auth.component';

describe('SxrAuthComponent', () => {
  let component: SxrAuthComponent;
  let fixture: ComponentFixture<SxrAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SxrAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SxrAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

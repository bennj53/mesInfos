import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MousseFollowerComponent } from './mousse-follower.component';

describe('MousseFollowerComponent', () => {
  let component: MousseFollowerComponent;
  let fixture: ComponentFixture<MousseFollowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MousseFollowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MousseFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

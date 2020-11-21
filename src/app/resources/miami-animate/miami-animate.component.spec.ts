import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiamiAnimateComponent } from './miami-animate.component';

describe('MiamiAnimateComponent', () => {
  let component: MiamiAnimateComponent;
  let fixture: ComponentFixture<MiamiAnimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiamiAnimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiamiAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

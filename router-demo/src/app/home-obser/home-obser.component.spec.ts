import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeObserComponent } from './home-obser.component';

describe('HomeObserComponent', () => {
  let component: HomeObserComponent;
  let fixture: ComponentFixture<HomeObserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeObserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeObserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

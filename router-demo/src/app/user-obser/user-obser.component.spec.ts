import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserObserComponent } from './user-obser.component';

describe('UserObserComponent', () => {
  let component: UserObserComponent;
  let fixture: ComponentFixture<UserObserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserObserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserObserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

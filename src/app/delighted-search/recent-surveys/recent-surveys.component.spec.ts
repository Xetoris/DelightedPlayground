import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSurveysComponent } from './recent-surveys.component';

describe('RecentSurveysComponent', () => {
  let component: RecentSurveysComponent;
  let fixture: ComponentFixture<RecentSurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentSurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

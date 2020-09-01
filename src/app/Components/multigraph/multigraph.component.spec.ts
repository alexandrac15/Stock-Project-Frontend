import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultigraphComponent } from './multigraph.component';

describe('MultigraphComponent', () => {
  let component: MultigraphComponent;
  let fixture: ComponentFixture<MultigraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultigraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultigraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

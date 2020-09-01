import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackedPanelComponent } from './tracked-panel.component';

describe('TrackedPanelComponent', () => {
  let component: TrackedPanelComponent;
  let fixture: ComponentFixture<TrackedPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackedPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

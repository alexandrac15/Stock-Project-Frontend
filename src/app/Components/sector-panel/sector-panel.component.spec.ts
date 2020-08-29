import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorPanelComponent } from './sector-panel.component';

describe('SectorPanelComponent', () => {
  let component: SectorPanelComponent;
  let fixture: ComponentFixture<SectorPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

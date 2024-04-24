import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorynoticesComponent } from './historynotices.component';

describe('HistorynoticesComponent', () => {
  let component: HistorynoticesComponent;
  let fixture: ComponentFixture<HistorynoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorynoticesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorynoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

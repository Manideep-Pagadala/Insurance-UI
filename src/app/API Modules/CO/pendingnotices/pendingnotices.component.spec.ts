import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingnoticesComponent } from './pendingnotices.component';

describe('PendingnoticesComponent', () => {
  let component: PendingnoticesComponent;
  let fixture: ComponentFixture<PendingnoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PendingnoticesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PendingnoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

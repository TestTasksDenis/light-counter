import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightTrafficComponent } from './light-traffic.component';

describe('LightTrafficComponent', () => {
  let component: LightTrafficComponent;
  let fixture: ComponentFixture<LightTrafficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightTrafficComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(LightTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

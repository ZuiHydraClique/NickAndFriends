import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandmitgliederComponent } from './bandmitglieder.component';

describe('BandmitgliederComponent', () => {
  let component: BandmitgliederComponent;
  let fixture: ComponentFixture<BandmitgliederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BandmitgliederComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandmitgliederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

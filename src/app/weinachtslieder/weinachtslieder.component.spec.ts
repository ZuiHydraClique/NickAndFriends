import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeinachtsliederComponent } from './weinachtslieder.component';

describe('WeinachtsliederComponent', () => {
  let component: WeinachtsliederComponent;
  let fixture: ComponentFixture<WeinachtsliederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeinachtsliederComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeinachtsliederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JazzpopliederComponent } from './jazzpoplieder.component';

describe('JazzpopliederComponent', () => {
  let component: JazzpopliederComponent;
  let fixture: ComponentFixture<JazzpopliederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JazzpopliederComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JazzpopliederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

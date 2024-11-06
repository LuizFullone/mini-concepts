import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhaustMapComponent } from './exhaust-map.component';

describe('ExhaustMapComponent', () => {
  let component: ExhaustMapComponent;
  let fixture: ComponentFixture<ExhaustMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhaustMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhaustMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

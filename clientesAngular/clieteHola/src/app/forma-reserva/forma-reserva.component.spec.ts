import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaReservaComponent } from './forma-reserva.component';

describe('FormaReservaComponent', () => {
  let component: FormaReservaComponent;
  let fixture: ComponentFixture<FormaReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaReservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormaReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

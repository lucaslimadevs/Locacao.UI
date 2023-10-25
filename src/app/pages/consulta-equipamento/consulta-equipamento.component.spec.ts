import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEquipamentoComponent } from './consulta-equipamento.component';

describe('ConsultaEquipamentoComponent', () => {
  let component: ConsultaEquipamentoComponent;
  let fixture: ComponentFixture<ConsultaEquipamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaEquipamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

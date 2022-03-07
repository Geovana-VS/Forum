import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapeVagasComponent } from './rodape-vagas.component';

describe('RodapeVagasComponent', () => {
  let component: RodapeVagasComponent;
  let fixture: ComponentFixture<RodapeVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodapeVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodapeVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

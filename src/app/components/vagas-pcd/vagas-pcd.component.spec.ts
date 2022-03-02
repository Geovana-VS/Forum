import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasPcdComponent } from './vagas-pcd.component';

describe('VagasPcdComponent', () => {
  let component: VagasPcdComponent;
  let fixture: ComponentFixture<VagasPcdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagasPcdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VagasPcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

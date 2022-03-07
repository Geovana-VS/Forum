import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralVagastecComponent } from './mural-vagastec.component';

describe('MuralVagastecComponent', () => {
  let component: MuralVagastecComponent;
  let fixture: ComponentFixture<MuralVagastecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralVagastecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralVagastecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

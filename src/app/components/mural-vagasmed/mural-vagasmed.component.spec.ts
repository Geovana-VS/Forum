import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralVagasmedComponent } from './mural-vagasmed.component';

describe('MuralVagasmedComponent', () => {
  let component: MuralVagasmedComponent;
  let fixture: ComponentFixture<MuralVagasmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralVagasmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralVagasmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

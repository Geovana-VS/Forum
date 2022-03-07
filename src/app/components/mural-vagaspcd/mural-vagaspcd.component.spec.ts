import { ComponentFixture, TestBed } from '@angular/core/testing';

import {MuralVagaspcdComponent } from './mural-vagaspcd.component';

describe('MuralVagaspcdComponent', () => {
  let component: MuralVagaspcdComponent;
  let fixture: ComponentFixture<MuralVagaspcdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralVagaspcdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralVagaspcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

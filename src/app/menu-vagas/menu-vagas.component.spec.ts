import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVagasComponent } from './menu-vagas.component';

describe('MenuVagasComponent', () => {
  let component: MenuVagasComponent;
  let fixture: ComponentFixture<MenuVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

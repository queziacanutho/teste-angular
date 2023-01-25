import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoBuscarComponent } from './curso-buscar.component';

describe('CursoBuscarComponent', () => {
  let component: CursoBuscarComponent;
  let fixture: ComponentFixture<CursoBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

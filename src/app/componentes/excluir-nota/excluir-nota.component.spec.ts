import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirNotaComponent } from './excluir-nota.component';

describe('ExcluirNotaComponent', () => {
  let component: ExcluirNotaComponent;
  let fixture: ComponentFixture<ExcluirNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirNotaComponent]
    });
    fixture = TestBed.createComponent(ExcluirNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

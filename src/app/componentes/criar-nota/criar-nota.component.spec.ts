import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarNotaComponent } from './criar-nota.component';

describe('CriarNotaComponent', () => {
  let component: CriarNotaComponent;
  let fixture: ComponentFixture<CriarNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarNotaComponent]
    });
    fixture = TestBed.createComponent(CriarNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



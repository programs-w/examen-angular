import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTarea } from './lista-tarea';

describe('ListaTarea', () => {
  let component: ListaTarea;
  let fixture: ComponentFixture<ListaTarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaTarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTarea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

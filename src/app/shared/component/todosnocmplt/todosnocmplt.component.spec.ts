import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosnocmpltComponent } from './todosnocmplt.component';

describe('TodosnocmpltComponent', () => {
  let component: TodosnocmpltComponent;
  let fixture: ComponentFixture<TodosnocmpltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosnocmpltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosnocmpltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

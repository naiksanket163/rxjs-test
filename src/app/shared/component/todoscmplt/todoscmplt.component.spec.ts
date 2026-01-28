import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoscmpltComponent } from './todoscmplt.component';

describe('TodoscmpltComponent', () => {
  let component: TodoscmpltComponent;
  let fixture: ComponentFixture<TodoscmpltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoscmpltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoscmpltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

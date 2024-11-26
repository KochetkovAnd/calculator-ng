import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldComponent } from './input-field.component';
import { Input } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('InputFieldComponent', () => {
  let component: InputFieldComponent;
  let fixture: ComponentFixture<InputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule], 
      declarations: [InputFieldComponent],
    }).compileComponents();
    
    fixture = TestBed.createComponent(InputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('должен инициализировать значения', () => {
    expect(component.value).toBe('');
    expect(component.lastValidValue).toBe('');
    expect(component.pattern).toBe('^[0-9]*$');
  });

  it('должен вызывать emit при изменении значения', () => {
    spyOn(component.valueChange, 'emit'); // Шпион для метода emit
    component.value = '1010';
    component.base = '2';
    component.validateInput();
    expect(component.valueChange.emit).toHaveBeenCalledWith('0b1010'); // Проверяем что emit был вызван с правильным значением
  });

  it('должен правильно очищать ведущие нули', () => {
    component.value = '00123';
    component.cleanLeadingZeros();
    expect(component.value).toBe('123');
  });

  it('должен обновлять паттерн при изменении основания', () => {
    component.base = '2'
    component.updateBase();
    expect(component.pattern).toBe('^[0-1]*$'); // Проверяем, что паттерн изменился для двоичной системы
  });

  it('должен обрабатывать ввод с неверным значением и откатываться к последнему корректному значению', () => {
    component.value = 'R';
    component.validateInput();
    expect(component.value).toBe(''); // Ожидаем, что значение сбросится
  });

  
});

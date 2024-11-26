import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { HttpServiceService } from '../../service/http-service.service';
import { of } from 'rxjs';
import { Operation } from '../../models/operation';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RoundPipe } from '../../pipes/round.pipe';
import { FormsModule } from '@angular/forms';
import { ResultColorDirective } from '../../directive/result-color.directive';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let httpService: HttpServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({     
      imports: [HttpClientTestingModule, FormsModule], 
      declarations: [CalculatorComponent, InputFieldComponent, RoundPipe, ResultColorDirective],
      providers: [
        {
          provide: HttpServiceService,
          useValue: {
            post: jasmine.createSpy('post').and.returnValue(of(10))
          }
        }
      ]
      
    })
    
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    component.num1 = '5'
    component.num2 = '5'
    component.operation = 'plus'
    httpService = TestBed.inject(HttpServiceService);
    fixture.detectChanges();
  });

  it('должен быть создан', () => {
    expect(component).toBeTruthy();
  });

  it('должен выполнять вычисления с использованием HttpServiceService', async () => {
    await component.calc();
    expect(httpService.post).toHaveBeenCalledWith('5', '5', 'plus'); 
    expect(component.res).toBe(10); 
  });

  it('должен правильно устанавливать операции', () => {
    const newOperation: Operation = { name: 'minus', text: 'Вычесть' };
    component.operation = newOperation.name;
    expect(component.operation).toBe('minus');
  });
});

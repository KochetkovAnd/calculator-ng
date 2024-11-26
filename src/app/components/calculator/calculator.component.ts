import { Component } from '@angular/core';
import { Operation } from '../../models/operation';
import { lastValueFrom } from 'rxjs';
import { HttpServiceService } from '../../service/http-service.service';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  num1:string=""
  num2:string=""
  operation:string = "plus"
  res:number = 0

  operations:Operation[] = [
    {name: "plus", text: "Сложить"},
    {name: "minus", text: "Вычесть"},
    {name: "multiply", text: "Умножить"},
    {name: "divide", text: "Разделить"}
  ]

  constructor(
    private httpService: HttpServiceService
  ) {}

  setNum1(num : string) {
    this.num1 = num
  }

  setNum2(num : string) {
    this.num2 = num
  }

  async calc() {
    this.res = await lastValueFrom(this.httpService.post(this.num1, this.num2, this.operation))
  }
}

import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Base } from '../../models/base';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {

  @Output() valueChange = new EventEmitter<string>();
  @ViewChild('inputField', { static: true }) inputField!: ElementRef;
  @Input() operation:string = "";

  value:string = ""
  pattern:string = "^[0-9]*$"
  base:string = "10"
  lastValidValue = ""
  
  

  bases:Base[] = [
    {value:"2", text:"Двоичная"},
    {value:"8", text:"Восьмиричная"},
    {value:"10", text:"Десятичная"},
    {value:"16", text:"Шестнадцатеричная"},
  ]

  

  validateInput(): void {
    const regex = new RegExp(this.pattern);
    if (regex.test(this.value)) {
      this.cleanLeadingZeros()
      this.updateInputField();
      this.lastValidValue = this.value      
    } else {
      this.cleanLeadingZeros()
      this.value = this.lastValidValue
      this.updateInputField();
    }
    switch (this.base) {
      case '2':
        this.valueChange.emit("0b" + this.value);
        break;
      case '8':
        this.valueChange.emit("0" + this.value);
        break;
      case '16':
        this.valueChange.emit("0x" + this.value);
        break;
      default:
        this.valueChange.emit(this.value);
    }   
  }

  private updateInputField(): void {
    this.inputField.nativeElement.value = this.value;
  }

  cleanLeadingZeros(): void {
    if (this.value.length > 1) {
      this.value = this.value.replace(/^0+/, '');      
    } else if (this.value.length == 1 && this.value[0] == "0" && this.operation == "divide") {
      this.value = "1"
    }
  }

  updateBase() {
    this.value = ""
    this.lastValidValue = ""
    switch (this.base) {
      case '2':        
        this.pattern = '^[0-1]*$';
        break;
      case '8':
        this.pattern = '^[0-7]*$';
        break;
      case '16':
        this.pattern = '^[0-9A-Fa-f]*$';
        break;
      default:
        this.pattern = '^[0-9]*$';
    }
  }
  
}

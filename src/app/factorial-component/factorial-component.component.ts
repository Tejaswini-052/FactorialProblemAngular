import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-factorial-component',
  templateUrl: './factorial-component.component.html',
  styleUrls: ['./factorial-component.component.css']
})
export class FactorialComponentComponent {
  @Output() factorialCalculated = new EventEmitter<number>();

  calculate(number: number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    this.factorialCalculated.emit(result);
  }
}

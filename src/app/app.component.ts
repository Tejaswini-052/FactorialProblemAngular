import { Component } from '@angular/core';
import { FactorialComponentComponent } from './factorial-component/factorial-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FactorialProblem';
  factorial: number | undefined;
  constructor(public child: FactorialComponentComponent) {}

  handleFactorial(result: number) {
    this.factorial = result;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  resultado: number = 0;
  num1: number = 0;
  num2: number = 0;
    
 sumar():void{
  this.resultado=this.num1+this.num2 ;
 }
  
}

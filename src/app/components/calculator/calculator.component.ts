
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  resultado: number = 0; 
    
  procesarResultado(resultado:number){
    this.resultado += Number(resultado);
  };

  
}

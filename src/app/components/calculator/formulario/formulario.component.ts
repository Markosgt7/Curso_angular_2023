import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  num1: number = 0;
  num2: number = 0;
  @Output() resultadoSuma: EventEmitter<number> = new EventEmitter<number>();
  sumar():void{
    let resultado = this.num1+ this.num2;
    this.resultadoSuma.emit(resultado);
  }

}

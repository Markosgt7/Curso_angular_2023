import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  n1: number = 0;
  n2: number = 0;

  @Output() resultadoSuma = new EventEmitter<number>();
  sumar(): void {
    let resultado = this.n1 + this.n2;
    this.resultadoSuma.emit(resultado);
  }
}

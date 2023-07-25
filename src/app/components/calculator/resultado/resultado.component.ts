import { Component } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  resultado: number = 0;
  
  procesarResultado(resultado: number){
    this.resultado = resultado;
  }
}

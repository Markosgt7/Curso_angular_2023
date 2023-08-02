import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();
  //nombreInput:string = '';
  //apellidoInput:string = '';
  /* -------------------------------forma de realizar el proceso fon reference-----------------------
  agregarPersona(nombreInput:HTMLInputElement, apellidoInput: HTMLInputElement){
    let persona1 = new Persona(nombreInput.value, apellidoInput.value);
    this.personaCreada.emit(persona1);
  }
 */

  //------------------FORMA DE TRABAJAR VIEW CHILD-------------------------------------------

  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;
  agregarPersona() {
    let persona1 = new Persona(
      this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value
    );
    this.personaCreada.emit(persona1);
  }
}

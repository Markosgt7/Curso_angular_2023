import { Component } from '@angular/core';
import { Persona } from './persona.model';


@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent {
  personas: Persona[] = [
    new Persona('Juan','Perez'),
    new Persona('María','Jimenez'),
    new Persona('José','Matías')
  ];
  personaAgregada(persona: Persona){
    this.personas.push(persona);
  }


}

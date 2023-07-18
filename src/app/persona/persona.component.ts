import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  nombre: String = 'Marcos';
  apellido:String = "Sanchez";
  edad: number = 36;
  private direccion: String = "Villa nueva";

  getDirec(){
    return this.direccion;
  }

}

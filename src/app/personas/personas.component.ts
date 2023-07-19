import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  deshabilitar = false;
  mensaje = 'No se ha agregado ninguna persona';
  titulo = '';
  titulodos = '';
  mostrar = false;
  agregarPersona(){
      this.mensaje = 'Persona agregada';
      this.mostrar = true;
  }
 
  modificarTitulo(event: Event){
    console.log('titulo modificado');
    this.titulo = (<HTMLInputElement>event.target).value;
  }


}

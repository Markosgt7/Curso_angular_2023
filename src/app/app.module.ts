import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonasComponent } from './personas/personas.component';
import { FormsModule } from '@angular/forms';//se agrego para poder usar el two way binding
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ListadoPersonasComponent } from './components/listado-personas/listado-personas.component';
import { ListaPersonaComponent } from './components/listado-personas/lista-persona/lista-persona.component';
import { FormularioComponent } from './components/listado-personas/formulario/formulario.component';
import { ResultadoComponent } from './components/calculator/resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    PersonasComponent,
    CalculatorComponent,
    ListadoPersonasComponent,
    ListaPersonaComponent,
    FormularioComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule//se importa para poder usar el two way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

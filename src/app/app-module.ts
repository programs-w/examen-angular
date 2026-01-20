import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { App } from './app';
import { ListaTarea } from './lista-tarea/lista-tarea';
import { CrearTarea } from './crear-tarea/crear-tarea';
import { EditarTarea } from './editar-tarea/editar-tarea';

//PARA EL APP.ROUTING.TS
import { routing, appRoutingProviders } from './app.routing';
//FORMULARIOS
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    App,
    ListaTarea,
    CrearTarea,
    EditarTarea
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProviders
  ],
  bootstrap: [App]
})
export class AppModule { }

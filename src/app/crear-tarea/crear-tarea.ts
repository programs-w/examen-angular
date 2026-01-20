import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/Tarea';
import { ServicioTarea } from '../services/ServicioTarea';


@Component({
  selector: 'app-crear-tarea',
  standalone: false,
  templateUrl: './crear-tarea.html',
  styleUrl: './crear-tarea.css',
  providers:[ServicioTarea]
})
export class CrearTarea implements OnInit{
  public nuevaTarea = new Tarea (0,0,'',false);

  public nombre : string ='';
  public apellidos: string='';
  usuarioEntrado: boolean = false;

  constructor(private mi_servicio:ServicioTarea){

  }
  ngOnInit (): void {

  }
  entrar():void{
    if (this.nombre.trim() !== '' && this.apellidos.trim() !== '') {
      this.usuarioEntrado = true;
    }

  }

  //create
  crearNuevaTarea () : void {
    this.mi_servicio.Create(this.nuevaTarea).subscribe({
      next:data =>{
        this.nuevaTarea=data;
        console.log ("Nueva tarea creada : ", this.nuevaTarea);
      },
      error:error =>{
        console.log("Error: ", error);

      }
    })
  }

}

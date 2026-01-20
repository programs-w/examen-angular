import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/Tarea';
import { ServicioTarea } from '../services/ServicioTarea';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-lista-tarea',
  standalone: false,
  templateUrl: './lista-tarea.html',
  styleUrl: './lista-tarea.css',
  providers:[ServicioTarea]
})
export class ListaTarea implements OnInit{

  public listaTareas:Tarea[]=[];
  constructor(private mi_servicio: ServicioTarea, private cdr : ChangeDetectorRef){

  }

  ngOnInit(): void {
    this.visualizarTodasTareas()
  }

  visualizarTodasTareas(): void {
    this.mi_servicio.ReadAll().subscribe({
      next:data=>{
        this.listaTareas=data.slice(0,20);
        console.log("Lista: ", this.listaTareas);
        this.cdr.detectChanges();
      },
      error:error=>{
        console.log ("Error: ", error);
      }
    })
  }

}

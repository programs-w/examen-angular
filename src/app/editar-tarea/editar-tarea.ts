import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/Tarea';
import { ServicioTarea } from '../services/ServicioTarea';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-editar-tarea',
  standalone: false,
  templateUrl: './editar-tarea.html',
  styleUrl: './editar-tarea.css',
  providers:[ServicioTarea]
})
export class EditarTarea implements OnInit{
  tareaEditando!:Tarea;
  idTareaEditando!: number;

  constructor(private mi_servicio:ServicioTarea, private router:Router, private route:ActivatedRoute, private cdr:ChangeDetectorRef){

    this.route=route;
    this.router=router;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      console.log("Parametro de la tarea: ", params);
      this.idTareaEditando=params['id'];
      this.visualizarTareaElegida();
    }
    )   
  }

    //readbyid
    visualizarTareaElegida() : void {
      this.mi_servicio.ReadById(this.idTareaEditando).subscribe({
        next:data=>{
          console.log ("Tarea seleccionada: ",data);
          this.tareaEditando=data;
          this.cdr.detectChanges();
        },
        error:error=>{
          console.log ("Error: ", error);
        }
      })

    }

    //UPDATE
    actualizarTarea(): void {
      this.mi_servicio.Update(this.idTareaEditando,this.tareaEditando).subscribe({
        next:data=>{
          console.log("Tarea actualizada: ", data)
        },
        error:error=>{
          console.log("Error: ", error);
        }
      })
    }


}

import { ModuleWithProviders } from "@angular/core";
import { Route,Router,Routes, RouterModule } from "@angular/router";


import { ListaTarea } from "./lista-tarea/lista-tarea";
import { CrearTarea } from "./crear-tarea/crear-tarea";
import { EditarTarea } from "./editar-tarea/editar-tarea";

const appRoutes:Routes =[

    {path:'', component:ListaTarea},
    {path:'lista-tarea', component:ListaTarea},
    {path:'editar-tarea/:id', component:EditarTarea},
    {path:'crear-tarea', component:CrearTarea},
    {path:'**', component:ListaTarea}

];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders<Route>=RouterModule.forRoot(appRoutes)  
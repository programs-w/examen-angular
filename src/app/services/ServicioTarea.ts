import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Tarea } from "../models/Tarea";

@Injectable()
export class ServicioTarea {
    private url = 'https://jsonplaceholder.typicode.com/todos'
    constructor(private mi_http:HttpClient){

    }

    //read all
    ReadAll(): Observable<Tarea[]>{
        return this.mi_http.get<Tarea[]>(this.url);
    }

    //readbyId
    ReadById(id : number) : Observable <Tarea> {
        return this.mi_http.get<Tarea>(`${this.url}/${id}`);
    }

    //create
    Create (tarea:Tarea) : Observable <Tarea> {
        return this.mi_http.post<Tarea>(this.url,tarea)
    }

    //update
    Update (id:number, tarea:Tarea): Observable<Tarea>{
        return this.mi_http.put<Tarea>(`${this.url}/${id}`, tarea)
    }

    //delete
    Delete (id:number) : Observable <Tarea> {
        return this.mi_http.delete<Tarea>(`${this.url}/${id}`)
    }


}
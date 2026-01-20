import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tareaPasos');

  nombre: string = '';
  apellidos: string = '';

  usuarioEntrado: boolean = false;

  entrar(): void {
    if (this.nombre.trim() !== '' && this.apellidos.trim() !== '') {
      this.usuarioEntrado = true;
    }
  }
}

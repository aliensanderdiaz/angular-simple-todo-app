import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tarea = '';
  tareas = [];

  constructor() { }

  ngOnInit() {
  }

  agregarTarea() {
    this.tareas.push( this.tarea );
    this.tarea = '';
  }

  eliminarTarea(indice) {
    this.tareas.splice(indice, 1);
  }

}

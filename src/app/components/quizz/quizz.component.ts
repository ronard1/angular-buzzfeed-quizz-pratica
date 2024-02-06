import { Component } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})

export class QuizzComponent {
  titulo:string=""

  preguntas:any
  preguntaSeleccionada:any

  respuestas:string[] = []
  respuestaSeleccionada:string = ""

  preguntaIndex:number = 0
  preguntaMaxIndex:number = 0

  finalizado:boolean = false
}

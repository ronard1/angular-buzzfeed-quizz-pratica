import { Component, OnInit } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})

export class QuizzComponent implements OnInit {
  
  titulo:string=""

  preguntas:any
  preguntaSeleccionada:any

  respuestas:string[] = []
  respuestaSeleccionada:string = ""

  preguntaIndex:number = 0
  preguntaMaxIndex:number = 0

  finalizado:boolean = false

  ngOnInit(): void {
    if (quizz_questions) {
      this.finalizado = false
      this.titulo = quizz_questions.title
      
      this.preguntas = quizz_questions.questions
      this.preguntaSeleccionada = this.preguntas[this.preguntaIndex]

      this.preguntaIndex = 0
      this.preguntaMaxIndex = this.preguntas.length

      
    }    
  }

  playerChoose(value:string){
    this.respuestas.push();
  }

  async nextStep(){
    this.preguntaIndex += 1

    if (this.preguntaMaxIndex > this.preguntaIndex) {
      this.preguntaSeleccionada = this.preguntas[this.preguntaIndex]
    }
    else{
      this.finalizado = true
    }
  }
}

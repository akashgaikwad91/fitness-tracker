import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { AngularFirestore } from '@angular/fire/firestore'
import { Subscription } from 'rxjs';

// import { map } from 'rxjs/add/operator/map';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit,OnDestroy {
  exercises: Exercise[];
  exerciseSubscription:Subscription
  constructor(
    private trainingSvc: TrainingService,
    private db: AngularFirestore
    ) { }

  ngOnInit(): void {
    this.exerciseSubscription=this.trainingSvc.exercisesChanged.subscribe(
      exercises=>(this.exercises=exercises)
    )
    this.trainingSvc.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingSvc.startExercise(form.value.exercise)
  }

  ngOnDestroy(){
    this.exerciseSubscription.unsubscribe()
  }
  
}

import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model'

@Component({
  selector: 'edit-meal',
  template: `
<!--If meal is selected, enter its details in the input boxes to edit-->
<div *ngIf="childselectedMeal">
  <h1>Edit Meal</h1>
  <div>
    <label>Enter Meal Name</label>
    <input [(ngModel)]="childselectedMeal.mealName">
   </div>
   <div>
       <label>Enter Meal Description</label>
       <input [(ngModel)]="childselectedMeal.Description">
   </div>

  <div>
    <label>Enter Calories</label>
      <input [(ngModel)]="childselectedMeal.calories">
      <button (click)="doneClicked()">Done</button>
  </div>
  </div>


  `

})
export class EditMealComponent {

  @Input() childselectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }

}

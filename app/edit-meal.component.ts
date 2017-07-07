import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model'

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childselectedMeal">
  <h1>Edit Keg</h1>
  <div>
    <label>Enter Meal Name</label>
    <input [(ngModel)]="childselectedMeal.name">
   </div>
   <div>
       <label>Enter Meal Description</label>
       <input [(ngModel)]="childselectedMeal.Description">
   </div>

  <div>
    <label>Enter Calories</label>
      <input [(ngModel)]="childselectedMeal.calories">
  </div>

</div>
  `

})
export class EditMealComponent {

  @Input() childselectedKeg: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }

}

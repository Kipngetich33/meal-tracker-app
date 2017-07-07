import {Component, Input, Output, EventEmitter} from '@angular/core'
import { Meal } from './meal.model'

@Component({
  selector:'meal-list',
  template:`
  <div *ngFor="let currentMeal of childMealList">
   <h5><strong>Meal</strong>:{{currentMeal.mealName}},<strong>Description</strong>:{{currentMeal.Description}},
   <strong>Calories</strong>:{{currentMeal.calories}}</h5>
   <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>


  </div>

  `
})
export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
}
}

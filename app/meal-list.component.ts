import {Component, Input, Output, EventEmitter} from '@angular/core'
import { Meal } from './meal.model'

@Component({
  selector:'meal-list',
  template:`
  <div *ngFor="let currentMeal of childMealList">
   <h5><strong>Meal</strong>:{{currentMeal.mealName}},<strong>Description</strong>:{{currentMeal.Description}},
   <strong>Calories</strong>:{{currentMeal.calories}}</h5>


  </div>

  `
})
export class MealListComponent {
  @Input() childMealList: Meal[];
}

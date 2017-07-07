import {Component, Input, Output, EventEmitter} from '@angular/core'
import { Meal } from './meal.model'

@Component({
  selector:'meal-list',
  template:`
  <select (change)="onChange($event.target.value)">
      <option value="all">Show All</option>
      <option value="over500">Over 500 calories</option>
      <option value="less500">Less Than 500 calories</option>
    </select>
    <!--Display meals using the calorific pipe and display according to dropdown options-->
  <div *ngFor="let currentMeal of childMealList | calorific:selectedCalories">
   <h5><strong>Meal</strong>:{{currentMeal.mealName}},<strong>Description</strong>:{{currentMeal.Description}},
   <strong>Calories</strong>:{{currentMeal.calories}}</h5>
   <button class="hvr-float-shadow" (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>


  </div>

  `
})
export class MealListComponent {
    @Input() childMealList: Meal[];
    @Output() clickSender = new EventEmitter();
//emitter for edit button
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
}
//
public selectedCalories: string = "over500";
  onChange(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
    console.log(this.selectedCalories);
}
}

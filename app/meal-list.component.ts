import {Component, Input, Output, EventEmitter} from '@angular/core'
import { Meal } from './meal.model'

@Component({
  selector:'meal-list',
  template:`
  <select class="btn btn-lg" (change)="onChange($event.target.value)">
      <option value="all">Show All</option>
      <option value="over500">Over 500 calories</option>
      <option value="less500">Less Than 500 calories</option>
    </select>
    <!--Display meals using the calorific pipe and display according to dropdown options-->

  <div class="well" *ngFor="let currentMeal of childMealList | calorific:selectedCalories">

<span class="label label-warning">Meal</span>:{{currentMeal.mealName}}<br>
<span class="label label-info">Description</span>:{{currentMeal.Description}}<br>
<span class="label label-danger">Calories</span>:{{currentMeal.calories}}<br>
   <button class="hvr-float-shadow btn btn-info" (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>



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

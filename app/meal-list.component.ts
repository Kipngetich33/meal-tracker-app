import {Component, Input, Output, EventEmitter} from '@angular/core'
import { Meal } from './meal.model'

@Component({
  selector:'meal-list',
  template:`
  <div class="container">

  <select class="btn btn-lg btn-info dropdown" (change)="onChange($event.target.value)">
      <option value="all">Show All</option>
      <option value="over500">Over 500 calories</option>
      <option value="less500">Less Than 500 calories</option>
    </select>
    <!--Display meals using the calorific pipe and display according to dropdown options-->

  <div class="well mealList" *ngFor="let currentMeal of childMealList | calorific:selectedCalories">
  <div class="row">
<div class="col-md-4">
<span class="label label-warning">Meal</span><br><br>{{currentMeal.mealName}}
</div>
<div class="col-md-4">
<span class="label label-info">Description</span><br><br>{{currentMeal.Description}}
</div>
<div class="col-md-4">
  <span class="label label-danger">Calories</span><br><br>{{currentMeal.calories}}<br>
</div>
</div>
  <div class="row">
  <div class="col-md-4">
  {{currentMeal.time}}
  </div>
  <div class="col-md-4">
  <!--edit button opens the edit modal-->
  <div>
    <button data-toggle="modal" data-target="#editModal"class="hvr-float-shadow btn btn-primary edit-btn editBtn" (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
  </div>
  </div>
  <div class="col-md-4">
  </div>

   </div>


    </div>
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

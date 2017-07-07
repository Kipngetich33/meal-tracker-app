import { Component, Output, Input, EventEmitter } from '@angular/core'
import { Meal } from './meal.model'

@Component ({
  selector: 'new-meal',
  template:`
   <h1>New Meal</h1>
   <div>
     <label>Enter Meal Name</label>
     <input #newName>
    </div>
  <div>
      <label>Enter Description</label>
      <input #newDescription>
  </div>
  <div>
    <label>Enter Calories</label>
    <input #newCalories>
        <button (click)="
      addClicked(newName.value, newDescription.value, newCalories.value);
      newName.value='';
      newDescription.value='';
      newCalories.value='';
      ">Add</button>
     </div>

  `
})
export class newMealComponent {
    @Output() newMealSender = new EventEmitter();
    addClicked(name:string,Description:string,calories:number){
    var newMealToAdd: Meal = new Meal(name,Description,calories);
    this.newMealSender.emit(newMealToAdd)
  }
}

import { Component } from '@angular/core';
import { Meal } from './meal.model'

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class=well>
      <h1 class="center">Meal Tracker App</h1>
    </div>
    <!--meal-list tags-->
    <meal-list [childMealList]="masterKegList"
    (clickSender)="showDetails($event)">
    </meal-list>

    <!--meal-edit tags-->
    <edit-meal [childselectedKeg]="selectedTask"
    (doneClickedSender)="finishedEditing()"></edit-meal>

    <!--new meal tags-->

  `
})

export class AppComponent {
 public masterKegList: Meal[] = [
   new Meal("chicken","Very tasty",450),
   new Meal("Pizza","Needed more toppings",250),
   new Meal("Waffles","needed more syrup",350)

 ];
 addMeal(newMealFromChild: Meal) {
   this.masterKegList.push(newMealFromChild)
 }
 selectedMeal: Meal= null;

 showDetails(clickedMeal: Meal){
   this.selectedMeal = clickedMeal;
 }
 finishedEditing(){
   this.selectedMeal = null;
 }
}

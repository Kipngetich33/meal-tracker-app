import { Component, Output, Input, EventEmitter } from '@angular/core'
import { Meal } from './meal.model'

@Component ({
  selector: 'new-meal',
  template:`
  <!-- Trigger the modal with a button -->
<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add Meal</button>

<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Add A meal</h4>
      </div>
      <div class="modal-body">
      <div>
          <span class="label label-warning"><label>Enter Meal Name</label></span>
        <input class="form-control" #newName><br><br>
       </div>
     <div>
           <span class="label label-info"><label>Enter Description</label></span>
         <input class="form-control" #newDescription><br><br>
     </div>
     <div>
         <span class="label label-danger"><label>Enter Calories</label></span>
       <input class="form-control" #newCalories>

        </div>
      </div>
      <div class="modal-footer">
      <button class="btn btn-default" data-dismiss="modal"(click)="
    addClicked(newName.value, newDescription.value, newCalories.value);
    newName.value='';
    newDescription.value='';
    newCalories.value='';
    ">Add</button>

    </div>

  </div>
</div>



  `
})
export class newMealComponent {
    @Output() newMealSender = new EventEmitter();
    addClicked(name:string,Description:string,calories:number,time:string){
    var newMealToAdd: Meal = new Meal(name,Description,calories,time);
    this.newMealSender.emit(newMealToAdd)
  }
}

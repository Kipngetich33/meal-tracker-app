import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model'

@Component({
  selector: 'edit-meal',
  template: `
<!--If meal is selected, enter its details in the input boxes to edit-->
<div *ngIf="childselectedMeal">

  <!-- Modal -->
<div id="editModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Edit Meal</h4>
      </div>
      <div class="modal-body">
      <div>
        <span class="label label-warning"><label>Enter Meal Name</label></span>
        <input class="form-control" [(ngModel)]="childselectedMeal.mealName"><br><br>
       </div>
       <div>
           <span class="label label-info"><label>Enter Meal Description</label></span>
           <input class="form-control" [(ngModel)]="childselectedMeal.Description"><br><br>
       </div>

      <div>
        <span class="label label-danger"><label>Enter Calories</label></span>
          <input class="form-control" [(ngModel)]="childselectedMeal.calories">

      </div>

      </div>
      <div class="modal-footer">
        <button class="btn btn-default" data-dismiss="modal" (click)="doneClicked()">Done</button>
      </div>
    </div>

  </div>
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

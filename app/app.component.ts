import { Component } from '@angular/core';
import { Meal } from './meal.model'

@Component({
  selector: 'my-app',
  template: `

    <div class="container-fluid">
      <div class="header well">
        <h1>Meal Tracker App</h1>
      </div>
      </div>
      <div class="container">
        <div class="row">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">

      <div class="item active">

        <div class="col-md-4">
        <img src="resources/img/ban2.jpg" alt="pizza">
      </div>
      <div class="col-md-4">
      <img src="resources/img/ban3.jpg" alt="pizza">
    </div>
    <div class="col-md-4">
    <img src="resources/img/ban2.jpg" alt="pizza">
  </div>
      </div>

  <!--Carousel item2-->
      <div class="item">
      <div class="col-md-4">
        <img src="resources/img/ban3.jpg" alt="beef">
        </div>

      <div class="col-md-4">
        <img src="resources/img/ban2.jpg" alt="beef">
        </div>

      <div class="col-md-4">
        <img src="resources/img/ban3.jpg" alt="beef">

        </div>
      </div>



  </div>
    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <i class="fa fa-hand-o-left" aria-hidden="true"></i>

    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <i class="fa fa-hand-o-right" aria-hidden="true"></i>

    </a>
  </div>
</div>

    <!--meal-list tags-->
    <meal-list [childMealList]="masterMealList"
    (clickSender)="showDetails($event)">
    </meal-list>

    <!--meal-edit tags-->
    <edit-meal [childselectedMeal]="selectedMeal"
    (doneClickedSender)="finishedEditing()"></edit-meal>

    <!--new meal tags-->
    <new-meal (newMealSender)="addMeal($event)"
    ></new-meal>
  </div>
  <div class="container-fluid navbar-bottom">
   <div class="row">
   <div class="row footRow">
   </div>
     <div class="col-md-12">

     </div>
       </div>

       <div id="contact">
         <a target='_blank' href="https://web.facebook.com/daveyhash"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
         <a target='_blank' href="https://github.com/d-kahara"> <i class="fa fa-github " aria-hidden="true"></i></a>
         <a target='_blank' href="https://www.instagram.com/davidkahara"><i class="fa fa-instagram" aria-hidden="true"></i></a>
       </div>

       <div>
         <span class="footerName"> <i class="fa fa-copyright" aria-hidden="true"></i>  David Kahara</span>
       </div>




 </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("chicken", "Very tasty", 450,"moment(Date.now()).format(MMMM Do YYYY)"),
    new Meal("Pizza", "Needed more toppings", 560,"moment(Date.now()).format(MMMM Do YYYY)"),
    new Meal("Waffles", "needed more syrup", 350,"moment.format(Date.now())"),
    new Meal("Githeri","mahindi ilikuwa ngumu",700,"moment.format(Date.now())")

  ];
  //Function to Add a new meal to the meals array
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild)
  }
  selectedMeal: Meal = null;

  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
}

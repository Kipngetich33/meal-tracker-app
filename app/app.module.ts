import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component'
import { newMealComponent } from './new-meal.component'
import { EditMealComponent } from './edit-meal.component'
import { FormsModule } from '@angular/forms';
import { CalorificPipe} from './calorific.pipe'

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, MealListComponent, newMealComponent, EditMealComponent, CalorificPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

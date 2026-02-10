import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // <- add this

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule   // <- add this here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

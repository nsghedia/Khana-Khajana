import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('Uttapama','this is not a uttapama','https://picsum.photos/id/237/200/300'),
    new Recipe('Dhokla','this is not a dhokla','https://picsum.photos/id/237/200/300'),
    new Recipe('Handva','this is not a handva','https://picsum.photos/id/237/200/300'),
    new Recipe('Uttapama','this is not a uttapama','https://picsum.photos/id/237/200/300'),
    new Recipe('Pani-puri','this is not a pani-puri','https://picsum.photos/id/237/200/300')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

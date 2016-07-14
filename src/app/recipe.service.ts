import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import { Recipe } from './recipe';
import { Observable } from 'rxjs/observable';

@Injectable()
export class RecipeService {
  constructor(private http: Http) {

  }

  // URL to the JSON file
  private recipesUrl = './recipes.json'; 

// get recipes from json file
getRecipes (): Observable<Recipe[]> {
  return this.http.get(this.recipesUrl)
                  .map(this.extractData)
                  .catch(this.handleError);
}
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); //log to console instead
    return Observable.throw(errMsg);
  }
}

// add recipes

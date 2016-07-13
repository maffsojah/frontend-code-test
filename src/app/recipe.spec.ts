/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Recipe} from './recipe';

describe('Recipe', () => {

  it('should create an instance', () => {
    expect(new Recipe()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let recipe = new Recipe({
      name: 'Sadza',
      type: 'Zimbabwean',
      cook_time: 25,
      ingredients: ["Water", "Mealie Meal"]
    });
    expect(recipe.name).toEqual('Sadza');
    expect(recipe.type).toEqual('Zimbabwean');
    expect(recipe.cook_time).toEqual(25);
    expect(recipe.ingredients).toEqual(["Water", "Mealie Meal"]);
});
});
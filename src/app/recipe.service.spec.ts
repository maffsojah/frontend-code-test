/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { RecipeService } from './recipe.service';

describe('Recipe Service', () => {
  beforeEachProviders(() => [RecipeService]);

  it('should ...',
      inject([RecipeService], (service: RecipeService) => {
    expect(service).toBeTruthy();
  }));
});

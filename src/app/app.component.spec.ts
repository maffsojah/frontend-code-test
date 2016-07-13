/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AppComponent } from './app.component';

beforeEachProviders(() => [AppComponent]);

describe('App: FrontendCodeTest', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'My Recipes app using the DataScienceInc frontend-code-test\'',
      inject([AppComponent], (app: AppComponent) => {
    expect(app.title).toEqual('My Recipes app using the DataScienceInc frontend-code-test');
  }));
});

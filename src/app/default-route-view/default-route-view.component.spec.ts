/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { DefaultRouteViewComponent } from './default-route-view.component';

describe('Component: DefaultRouteView', () => {
  it('should create an instance', () => {
    let component = new DefaultRouteViewComponent();
    expect(component).toBeTruthy();
  });
});

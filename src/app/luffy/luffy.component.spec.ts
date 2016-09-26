/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { LuffyComponent } from './luffy.component';

describe('Component: Luffy', () => {
  it('should create an instance', () => {
    let component = new LuffyComponent();
    expect(component).toBeTruthy();
  });
});

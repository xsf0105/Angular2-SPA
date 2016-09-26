/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ZoroComponent } from './zoro.component';

describe('Component: Zoro', () => {
  it('should create an instance', () => {
    let component = new ZoroComponent();
    expect(component).toBeTruthy();
  });
});

import { Constant } from './hero';
import { CONSTANT } from './data-constant';
import { Injectable } from '@angular/core';

@Injectable()
export class _serviceConstant {
  getHeroes(): Constant {
    return CONSTANT;
  }

}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/  
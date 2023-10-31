import { Injectable } from '@angular/core';

@Injectable()
export class Counter2Service {
  counter: number;

  constructor() {
    this.counter = 0;
  }

  get(): number {
    return this.counter;
  }

  set(value: number): void {
    this.counter = value;
  }
}

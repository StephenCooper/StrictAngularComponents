import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-pipe',
  template: `
  <p>with-pipe works!</p>

  <div>
      {{counterAcceptType}} IS null = {{counterAcceptType === null}}
  </div>
  <div>
      {{counterAsNumber}} IS null = {{counterAsNumber === null}}
  </div>`
})
export class WithPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Have we considered if the user is going to be using an async pipe which might pass us a null value to start with?
  // Let's not force them to cast if our code can support it.

  // These defaults are overridden by the pipe and so start with a null value and not the default as you might hope.

  @Input()
  counterAsNumber: number = -2;

  @Input()
  counterAcceptType: number = -3;
  static ngAcceptInputType_counterAcceptType: number | null;


}

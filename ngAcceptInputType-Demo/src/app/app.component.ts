import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
  <app-display 
    disabled
    disabledWithAcceptType
    disabledWithGetSet>
  </app-display>

  <app-display 
    [disabled]="disabledStream$ | async">
  </app-display>

  <app-with-pipe 
    [counterAsNumber]="currValue" 
    [counterAcceptType]="currValue">
  </app-with-pipe>

  <app-with-pipe 
    [counterAsNumber]="valueStream$ | async" 
    [counterAcceptType]="valueStream$ | async">
  </app-with-pipe>

  <app-with-pipe 
    [counterAsNumber]="$any(valueStream$ | async)"
    [counterAcceptType]="valueStream$ | async">
  </app-with-pipe>
  `
})
export class AppComponent {
  title = 'ngAcceptInputType-Demo';

  currValue: number = 10;

  valueStream$: Observable<number> = interval(2_000)
  disabledStream$: Observable<boolean> = interval(2_000).pipe(map(x => x % 2 === 0))
}

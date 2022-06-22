import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <app-display disabled></app-display>
  
  <!-- Errors as intial null value is not supported -->
  <app-display [disabled]="disabledStream$ | async"></app-display>
  `,
})
export class AppComponent {
  title = 'SetterGetter-Demo';

  disabled: boolean = true;
  disabledStream$: Observable<boolean> = interval(2_000).pipe(map(x => x % 2 === 0))

}

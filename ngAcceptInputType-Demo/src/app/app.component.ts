import { Component } from '@angular/core';
import { interval, Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ngAcceptInputType-Demo';

  currValue: number = 10;

  valueStream$: Observable<number> = interval(2_000)
  disabledStream$: Observable<boolean> = interval(2_000).pipe(map(x => x % 2 === 0))
}

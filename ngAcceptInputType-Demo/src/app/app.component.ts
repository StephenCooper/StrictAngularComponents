import { Component } from '@angular/core';
import { interval, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngAcceptInputType-Demo';

  currValue: number = 10;

  valueStream$: Observable<number> = interval(2_000)
}

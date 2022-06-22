import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <app-display disabled></app-display>
  
  <!-- Errors as intial null value is not supported -->
  <app-display [disabled]="disabledStream$ | async"></app-display>

  <app-generic 
    [rowData]="rowData" 
    (rowDataUpdated)="onRowDataUpdate($event)">
  </app-generic>

  `,
})
export class AppComponent {
  title = 'SetterGetter-Demo';

  disabled: boolean = true;
  disabledStream$: Observable<boolean> = interval(2_000).pipe(map(x => x % 2 === 0))

  rowData: number[] = [];
  onRowDataUpdate(event: string[]) { }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {

  private _disabled!: boolean;

  // From Typescript 4.3 we can accurately set different types for get and set method
  // which enables us to allow the string type in the setter to support attribute declaration
  // as <app-display disabled> ~ <app-display [disabled]="''" >
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean | string) {
    this._disabled = (value === '') || value === true;
  }
}

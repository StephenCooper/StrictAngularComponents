import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  template: '<p>display works!</p>'
})
export class DisplayComponent implements OnChanges {

  @Input()
  public disabled: boolean = false;

  private _disabledWithAcceptType: boolean = false;
  @Input()
  public disabledWithAcceptType: boolean = false;
  static ngAcceptInputType_disabledWithAcceptType: boolean | '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disabledWithAcceptType) {
      const currValue = changes.disabledWithAcceptType.currentValue as string | boolean;
      if (typeof (currValue) === 'boolean') {
        this._disabledWithAcceptType = currValue
      } else {
        this._disabledWithAcceptType = currValue === '';
      }
    }
  }


  private _disabledWithGetSet: boolean = false;
  @Input()
  public get disabledWithGetSet(): boolean {
    return this._disabledWithGetSet;
  }
  public set disabledWithGetSet(value: boolean) {
    // Have to cast type to be able to add support for plain attribute
    // <app-display disabledWithGetSet>
    // by handling the empty string case
    const valueAsString = value as unknown as string;
    this._disabledWithGetSet = valueAsString === '' || value === true;
  }
  //static ngAcceptInputType_disabledWithGetSet: boolean | '';

}

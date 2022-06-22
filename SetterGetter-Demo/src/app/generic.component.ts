import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generic',
  template: '<p>generic works!</p>',
})
export class GenericComponent<TData> {
  @Input()
  rowData: TData[] | undefined;
  @Output()
  rowDataUpdated = new EventEmitter<TData[]>();
}


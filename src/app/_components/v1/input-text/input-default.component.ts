import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'InputDefault[_id]',
  templateUrl: './input-default.component.html',
  styleUrls: ['./input-default.component.scss']
})
export class InputDefaultComponent {
  @Input() _id!: string;
  @Input() _label!: string;
  @Input() _hasError: boolean = false;
  @Input() _placeholder: string = "";
  @Input() _value: string = "";
  @Input() _type: string = "text";
  @Input() classInput: string = "";
  @Output() valueChange: any = new EventEmitter<string>();

  changes(event: any) {
    this.valueChange.emit(event.target.value);
  }
}

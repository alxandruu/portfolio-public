import { Component, Input } from '@angular/core';
import { ComponentsUtils } from '../_constants/Utils';
@Component({
  selector: 'TitleDefault[_value]',
  templateUrl: './title-default.component.html',
  styleUrls: ['./title-default.component.scss']
})
export class TitleDefaultComponent {
  private readonly avSize: string[] = ['s', 'm', 'l', 'xl'];

  @Input() _value!: string;
  @Input() _size: string = "M";
  @Input() _reactiveStyle: boolean = true;
  @Input() _responsiveStyle: boolean = true;
  @Input() class: string = '';
  protected size: string = this._size;

  ngOnChanges(): void {
    this.size = ComponentsUtils.propertyDefault(this.avSize, this._size.toLowerCase(), 'M') as string;
  }
}

import { Component, Input } from '@angular/core';
import { ComponentsUtils } from '../_constants/Utils';

@Component({
  selector: 'ImageProfile',
  templateUrl: './image-profile.component.html',
  styleUrls: ['./image-profile.component.scss']
})
export class ImageProfileComponent {
  private readonly avSize: string[] = ['s', 'm', 'l', "xl", "auto", "fill"];

  @Input() _size: string = 'auto';
  @Input() _src: string = "";
  @Input() _alt: string = "";

  protected size: string = this._size;


  ngOnChanges(): void {
    this.size = ComponentsUtils.propertyDefault(this.avSize, this._size.toLowerCase(), 'm') as string;
  }

}

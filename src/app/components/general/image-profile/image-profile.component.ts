import { Component, Input } from '@angular/core';
import { propertyDefault } from 'src/app/models/utils';
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
    this.size = propertyDefault(this.avSize, this._size.toLowerCase(), 'm') as string;
  }

}

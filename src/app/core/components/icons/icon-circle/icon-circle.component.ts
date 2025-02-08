import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'icon-circle',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox = "0 0 512 512" [style.width]="width" [style.height]="height" >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
   `,
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class IconCircleComponent {
  @Input() height: number = 25;
  @Input() width: number = 25;
}

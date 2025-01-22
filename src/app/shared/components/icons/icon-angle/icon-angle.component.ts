import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'icon-angle',
  imports: [CommonModule],
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" *ngIf="direction"
        viewBox="0 0 320 512" [style.width]="width" [style.height]="height" class="direction-{{direction}}" >
        <path
            d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
    </svg>
  `,
  styles: [
    `
    svg {
      --rotation-multiplier: 0;
      transform: rotate(calc(90deg * var(--rotation-multiplier)));
      transition: transform 0.25s ease;

      &.direction-down {
        --rotation-multiplier: 1;
      }
      &.direction-left {
        --rotation-multiplier: 2;
      }
      &.direction-up {
        --rotation-multiplier: 3;
      }
    }
  `
  ],
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class IconAngleComponent {
  @Input() height: number = 25;
  @Input() width: number = 25;
  @Input() direction!: "up" | "left" | "right" | "down";
}

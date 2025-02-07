import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { fadeInOutAnimation } from 'src/app/shared/static/animations';
import { WINDOW } from '../../providers/window';

@Component({
  selector: 'scroll-top-button',
  templateUrl: 'scroll-top-button.component.html',
  standalone: true,
  imports: [CommonModule],
  animations: [
    fadeInOutAnimation
  ]
})
export class ScrollTopButtonComponent {
  protected readonly window: Window | null = inject(WINDOW);
  scrollY: number | undefined;

  @Input() width: number = 20;
  @Input() height: number = 20;

  constructor() {
    this.window?.addEventListener('scroll', () => this.scrollY = this.window?.scrollY)
  }
}

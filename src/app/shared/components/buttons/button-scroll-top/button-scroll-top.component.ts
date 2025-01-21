import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PortalService } from 'src/app/core/services/portal/portal.service';
import { fadeInOutAnimation } from 'src/app/shared/static/animations';

@Component({
  selector: 'button-scroll-top',
  template: `
    <div class="position-fixed bottom-0 end-0 me-3 mb-3 rounded bg-theme-dark t z-1 cursor-pointer"
      *ngIf="scrollY > 250" (click)="scrollTop()" @fadeInOutAnimation>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-path-light" [style.margin]="calcMargin()" [style.width]="width" [style.height]="height">
          <path
              d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
      </svg>
    </div>
  `,
  standalone: true,
  imports: [CommonModule],
  styleUrls: [],
  animations: [
    fadeInOutAnimation
  ]
})
export class ButtonScrollTopComponent implements OnInit {
  show: boolean = false;
  scrollY: number = 0;

  @Input() width: number = 30;
  @Input() height: number = 30;

  calcMargin() {
    return `calc(${this.width}px  - 5px)`
  }

  constructor(private portalSrv: PortalService) {

  }
  ngOnInit(): void {
    this.portalSrv.getScrollY().subscribe(s => this.scrollY = s)
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

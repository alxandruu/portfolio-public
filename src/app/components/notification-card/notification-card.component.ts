import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss']
})

export class NotificationCardComponent {
  protected showUXIA: boolean = true;
  protected timeout: any = setTimeout(() => { this.showUXIA = false }, 6500);
  @Input() readonly title: string  = "Titulo";
  @Input() readonly message: string = "Mensaje";
  @Input() readonly type: string = "warning";

  constructor() {
  }

  resetTimeout() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => { this.showUXIA = false }, 6500);
  };
}

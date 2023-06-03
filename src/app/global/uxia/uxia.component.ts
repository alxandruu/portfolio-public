import { Component, Input } from '@angular/core';

@Component({
  selector: 'uxia',
  templateUrl: './uxia.component.html',
  styleUrls: ['./uxia.component.scss']
})

export class UxiaComponent {
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

import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'admin-modal',
  templateUrl: './admin-modal.component.html',
  styleUrls: ['./admin-modal.component.scss']
})
export class AdminModalComponent {
  @Input() title: string = "Admin Modal";
  @Input() opened: boolean = false;
  @Output() toggleModal = new EventEmitter<boolean>();

  toggle(): void {
    this.toggleModal.emit(!this.opened);
  }
 
}

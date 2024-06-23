import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'admin-selector',
  templateUrl: './admin-selector.component.html',
  styleUrls: ['./admin-selector.component.scss']
})
export class AdminSelectorComponent {
  @Input() text: string = "A.M.O";
  @Output() toggleModal = new EventEmitter<boolean>();

  openModal(): void {
    this.toggleModal.emit(true);
  }
  

}

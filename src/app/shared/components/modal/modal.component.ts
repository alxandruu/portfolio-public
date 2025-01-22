import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { fadeInOutAnimation } from '../../static/animations';
import { IconsModule } from '../icons/icons.module';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  standalone: true,
  imports: [CommonModule, IconsModule],
  styleUrls: ['./modal.component.scss'],
  animations: [fadeInOutAnimation]
})
export class ModalComponent {
  @Input() title: string = "";
  @Input() show: boolean = true;

}

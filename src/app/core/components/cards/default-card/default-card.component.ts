import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'default-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default-card.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DefaultCardComponent {
  @Input() image: string = "#";
  @Input() heading: string = "Heading";
  @Input() description: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam modi necessitatibus repellendus? Consequuntur itaque, deserunt amet illum quasi inventore assumenda, sint nihil provident sequi voluptatibus. Error harum provident laudantium nostrum!";

}

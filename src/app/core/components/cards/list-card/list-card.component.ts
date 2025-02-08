import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Link } from 'src/app/core/types/link.interface';


@Component({
  selector: 'list-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'list-card.component.html',
})
export class ListCardComponent {
  @Input() image: string = "#";
  @Input() heading: string = "Heading";
  @Input() description: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam modi necessitatibus repellendus? Consequuntur itaque, deserunt amet illum quasi inventore assumenda, sint nihil provident sequi voluptatibus. Error harum provident laudantium nostrum!";

}

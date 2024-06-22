import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Link } from 'src/app/models/interfaces/link';

@Component({
  selector: 'component-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() link!: Link;
  @Input() image: string = "";
  @Input() heading: string = "Heading";
  @Input() description: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam modi necessitatibus repellendus? Consequuntur itaque, deserunt amet illum quasi inventore assumenda, sint nihil provident sequi voluptatibus. Error harum provident laudantium nostrum!";
}

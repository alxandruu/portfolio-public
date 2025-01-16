import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Link } from 'src/app/core/models/interfaces/link';

/**
 * Component used to show information in the portal in a card list format
 * With an image, title, and description. It also accepts links
 * 
 */
@Component({
  selector: 'component-list-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent {

  /**
   * Image URL to be displayed in the card
   * @type {string} 
   */
  @Input() image: string = "";

  /**
  * Heading to be displayed in the card
  * @type {string} 
  */
  @Input() heading: string = "Heading";

  /**
  * Description to be displayed in the card, it shows only a maximum of 4 lines
  * @type {string} 
  */
  @Input() description: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam modi necessitatibus repellendus? Consequuntur itaque, deserunt amet illum quasi inventore assumenda, sint nihil provident sequi voluptatibus. Error harum provident laudantium nostrum!";

}

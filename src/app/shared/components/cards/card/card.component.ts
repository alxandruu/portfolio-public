import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Link } from 'src/app/core/models/interfaces/link';

/**
 * Component used to show information in the portal in a card format. 
 * With an image, title, and description. It also accepts links
 * 
 */
@Component({
  selector: 'component-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card-component">
      <img [src]="image" class="unselectable rounded object-fit-cover box-shadow-dark" loading="lazy" width="100%" height="200px">
      <div class="mt-3 mx-1">
          <h3 class="fw-bold text-theme-dark">{{heading}} </h3>
          <p class="text-theme-dark">{{description}}</p>
      </div>
    </div>
  `,
})
export class CardComponent {
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

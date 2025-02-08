import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Link } from 'src/app/core/types/link.interface';

/**
 * Component used to show information in the portal in a card list format
 * With an image, title, and description. It also accepts links
 * 
 */
@Component({
  selector: 'component-list-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="list-card-component">
      <div class="row">
          <div class="col-md-4">
              <div class="d-flex align-items-center">
                  <img [src]="image" class="unselectable me-3 rounded object-fit-cover" loading="lazy" width="125px"
                      height="75px">
                  <h4 class=" fw-bold text-theme-dark">{{heading}}</h4>
              </div>
          </div>
          <div class="col-md-8">
              <p class="mt-3 mx-1 text-theme-dark text-lg-end mt-lg-0">{{description}}</p>
          </div>
      </div>
    </div>
  `,
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

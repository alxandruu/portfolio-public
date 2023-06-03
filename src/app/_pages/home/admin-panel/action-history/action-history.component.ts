import { Component, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { History, } from 'src/app/_models/history';
import { OthersManagerService } from 'src/app/_services/firebase-manager/others/others-manager.service';
import { I18nService } from 'src/app/_services/i18n/i18n.service';



@Component({
  selector: 'admin-action-history',
  templateUrl: './action-history.component.html',
  styleUrls: ['./action-history.component.scss']
})
export class ActionHistoryComponent {
  protected actionHistory: Observable<History[]>;
  protected selected!: History | null;
  public modal_status: boolean = false;

  constructor(protected i18s: I18nService, private om: OthersManagerService) {
    this.actionHistory = this.om.getActionHistory();
  }

  toggleSC(): void {
    $(".selector-container-toggle").toggleClass("active");
    $(".selector-container").toggleClass("active");
  }
}

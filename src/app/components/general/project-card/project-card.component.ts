import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/interfaces';
import { StorageManagerService } from 'src/app/services/firebase-manager/storage/storage-manager.service';

@Component({
  selector: 'project-card[pr]',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() pr!: Project;

  constructor(private sm: StorageManagerService) {
  }

  ngOnInit(): void {
    this.sm.retrieveURLImageFromStorage(`projects/${this.pr.id}/${this.pr.img}`).then((url) => {
      this.pr.img = url;
    });
  }
}

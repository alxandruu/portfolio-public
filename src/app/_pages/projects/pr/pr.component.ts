import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/_models/project';
import { StorageManagerService } from 'src/app/_services/firebase-manager/storage/storage-manager.service';

@Component({
  selector: 'app-pr[pr]',
  templateUrl: './pr.component.html',
  styleUrls: ['./pr.component.scss']
})
export class PrComponent implements OnInit {
  @Input() pr!: Project;

  constructor(private sm: StorageManagerService) {
  }

  ngOnInit(): void {
    this.sm.retrieveURLImageFromStorage(`projects/${this.pr.id}/${this.pr.img}`).then((url) => {
      this.pr.img = url as string;
    });
  }
}

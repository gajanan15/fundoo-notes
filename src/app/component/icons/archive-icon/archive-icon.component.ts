import { FundooService } from './../../../services/user_service/fundoo.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-archive-icon',
  templateUrl: './archive-icon.component.html',
  styleUrls: ['./archive-icon.component.scss'],
})
export class ArchiveIconComponent implements OnInit {
  constructor(private httpPostAddArchive: FundooService) {}

  @Input() note: [];
  noteId: any = [];
  archive: boolean;

  ngOnInit(): void {}

  @Output() getList = new EventEmitter<any>();

  addToArchive() {
    this.noteId = this.note['id'];
    var data = {
      isArchived: true,
      noteIdList: [this.noteId],
    };
    this.httpPostAddArchive.addArchiveNote(data).subscribe(
      (response) => {
        console.log('Archive Notes: ', response);
        this.getList.emit();
      },
      (error) => {
        console.log('Archive Error: ', error);
      }
    );
  }
}

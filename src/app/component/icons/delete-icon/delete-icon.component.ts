import { FundooService } from './../../../services/user_service/fundoo.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-icon',
  templateUrl: './delete-icon.component.html',
  styleUrls: ['./delete-icon.component.scss'],
})
export class DeleteIconComponent implements OnInit {
  constructor(private httpPostAddTrash: FundooService) {}

  @Input() note: [];
  noteId: any = [];

  ngOnInit(): void {}

  @Output() getList = new EventEmitter<any>();

  addToTrash() {
    this.noteId = this.note['id'];
    var data = {
      isDeleted: true,
      noteIdList: [this.noteId],
    };
    this.httpPostAddTrash.addToTrash(data).subscribe(
      (response) => {
        console.log('Trash API: ', response);
        this.getList.emit();
      },
      (error) => {
        console.log('Trash Error: ', error);
      }
    );
  }
}

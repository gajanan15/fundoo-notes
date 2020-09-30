import { FundooService } from './../../services/user_service/fundoo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  constructor(private httpGetAllNote: FundooService) {}

  list: any = [];
  noteList: any = [];
  notes: any;

  ngOnInit(): void {
    this.getAllNote();
  }

  getAllNote() {
    this.httpGetAllNote.getAllNotes().subscribe(
      (response) => {
        this.list = response;
        this.noteList = this.list.data.data;
        this.notes = this.noteList
          .filter((e) => {
            return e.isArchived === false && e.isDeleted === false;
          })
          .reverse();
      },
      (error) => {
        console.log('Get Note Error: ', error);
      }
    );
  }
}

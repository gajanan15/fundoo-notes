import { FundooService } from './../../services/user_service/fundoo.service';
import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-note-dialogbox',
  templateUrl: './note-dialogbox.component.html',
  styleUrls: ['./note-dialogbox.component.scss'],
})
export class NoteDialogboxComponent implements OnInit {
  noteTitle: string;
  noteDescription: string;
  id; color;

  constructor(
    public dialogRef: MatDialogRef<NoteDialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpPost: FundooService
  ) {}

  ngOnInit(): void {
    console.log('aditya: ', this.data.noteid);
    this.noteTitle = this.data.noteid.title;
    this.noteDescription = this.data.noteid.description;
    this.id = this.data.noteid.id;
    this.color = this.data.noteid.color;
  }

  updateNote() {
    var data = {
      title: this.noteTitle,
      description: this.noteDescription,
      noteId: this.id,
    };
    this.httpPost.updateNotes(data).subscribe(
      (respone) => {
        console.log('update response: ', respone);
      },
      (error) => {
        console.log('updateNote Error: ', error);
      }
    );
  }
}

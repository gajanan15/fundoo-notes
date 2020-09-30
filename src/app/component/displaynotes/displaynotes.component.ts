import { NoteDialogboxComponent } from './../note-dialogbox/note-dialogbox.component';
import { FundooService } from './../../services/user_service/fundoo.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss'],
})
export class DisplaynotesComponent implements OnInit {
  constructor(
    private httpGetAllNote: FundooService,
    public dialog: MatDialog
  ) {}

  @Input() notes: [];
  @Output() getNoteList = new EventEmitter<any>();

  list: any = [];
  noteList: any = [];
  noteId: any = [];
  archive: boolean;
  title: any;
  description: any;

  ngOnInit(): void {}

  openDialog(noteid) {
    const dialogRef = this.dialog.open(NoteDialogboxComponent, {
      width: '450px',
      data: {
        noteid,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.getNoteList.emit();
    });
  }

  addToArchive(noteid) {
    this.noteId = [noteid.id];
    this.archive = noteid.isArchived;
    var data = {
      isArchived: true,
      noteIdList: this.noteId,
    };
    this.httpGetAllNote.addArchiveNote(data).subscribe(
      (response) => {
        console.log('Archive Notes: ', response);
        this.getNoteList.emit();
      },
      (error) => {
        console.log('Archive Error: ', error);
      }
    );
  }

  addToTrash(noteid) {
    this.noteId = [noteid.id];
    var data = {
      isDeleted: true,
      noteIdList: this.noteId,
    };
    this.httpGetAllNote.addToTrash(data).subscribe(
      (response) => {
        console.log('Trash API: ', response);
        this.getNoteList.emit();
      },
      (error) => {
        console.log('Trash Error: ', error);
      }
    );
  }
}

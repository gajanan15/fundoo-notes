import { NoteDialogboxComponent } from './../note-dialogbox/note-dialogbox.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss'],
})
export class DisplaynotesComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

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
}

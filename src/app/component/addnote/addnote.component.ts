import { FundooService } from './../../services/user_service/fundoo.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss'],
})
export class AddnoteComponent implements OnInit {
  constructor(private httpPostAddNote: FundooService) {}

  ngOnInit(): void {}
  @Output() getNoteList = new EventEmitter<any>();

  title: any;
  description: any;
  isTrue: boolean = true;

  fieldClick() {
    this.isTrue = !this.isTrue;
  }

  buttonClick(title, description) {
    if (title.value === '' && description.value === '') {
      this.fieldClick();
    } else {
      this.fieldClick();
      var noteData = {
        title: title.value,
        description: description.value,
      };
      this.httpPostAddNote.addNote(noteData).subscribe(
        (response) => {
          console.log(response);
          this.getNoteList.emit();
        },
        (error) => {
          console.log('Note Error: ', error);
        }
      );
    }
  }
}

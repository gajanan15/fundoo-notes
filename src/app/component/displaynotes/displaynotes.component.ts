import { FundooService } from './../../services/user_service/fundoo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  constructor(private httpGetAllNote: FundooService) { }

  list: any = [];
  noteList: any = [];

  ngOnInit(): void {
    this.getAllNote()
  }

  getAllNote() {
    this.httpGetAllNote.getAllNotes().subscribe((response) => {
      console.log("All Notes: ", response)
      this.list = response;
      this.noteList = this.list.data.data;
      this.noteList.reverse();
    }, error => {
      console.log("Get Note Error: ", error)
    })
  }

}

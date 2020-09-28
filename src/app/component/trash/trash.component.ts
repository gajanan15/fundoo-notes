import { FundooService } from './../../services/user_service/fundoo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor(private httpGateAllTrashNotes: FundooService) { }

  trashList: any = [];
  trashNoteList: any = [];

  ngOnInit(): void {
    this.getAllTrashNote()
  }

  getAllTrashNote(){
    this.httpGateAllTrashNotes.getAllTrashNotes().subscribe((response)=>{
      console.log("get all trash: ",response);
      this.trashList = response;
      this.trashNoteList = this.trashList.data.data;
      this.trashNoteList.reverse();
    },error=>{
      console.log("Trash Error: ",error)
    })
  }
}

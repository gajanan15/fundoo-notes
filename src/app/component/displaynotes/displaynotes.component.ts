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
  noteId:any=[];
  archive:boolean;
  notes:any;

  ngOnInit(): void {
    this.getAllNote()
  }
  
  getAllNote() {
    this.httpGetAllNote.getAllNotes().subscribe((response) => {
      console.log("All Notes: ", response)
      this.list = response;
      this.noteList = this.list.data.data;
      this.notes = this.noteList.filter(function(e){
        return e.isArchived === false && e.isDeleted === false
      }).reverse();
    }, error => {
      console.log("Get Note Error: ", error)
    })
  }

  addToArchive(noteid){
    this.noteId = [noteid.id];
    this.archive = noteid.isArchived;
    var data={
      isArchived:true,
      noteIdList:this.noteId
    };
    this.httpGetAllNote.addArchiveNote(data).subscribe((response)=>{
      console.log("Archive Notes: ",response);
    },error=>{
      console.log("Archive Error: ",error);
    })
  }

  addToTrash(noteid){
    this.noteId = [noteid.id];
    var data={
      isDeleted:true,
      noteIdList:this.noteId
    };
    this.httpGetAllNote.addToTrash(data).subscribe((response)=>{
      console.log("Trash API: ",response)
    },error=>{
      console.log("Trash Error: ",error)
    })
  }
}

import { FundooService } from './../../services/user_service/fundoo.service';
import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor(private httpGetAllArchiveNotes : FundooService) { }

  archiveList: any = [];
  archiveNoteList: any = [];

  ngOnInit(): void {
    this.getAllArchiveNote();
  }
  

  getAllArchiveNote(){
    this.httpGetAllArchiveNotes.getAllArchiveNotes().subscribe((response)=>{
      console.log("get all Archive: ",response);
      this.archiveList = response;
      this.archiveNoteList = this.archiveList.data.data;
      this.archiveNoteList.reverse();
    },error=>{
      console.log("getArchiveError: ",error)
    })
  }
}

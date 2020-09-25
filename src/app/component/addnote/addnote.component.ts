import { FundooService } from './../../services/user_service/fundoo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss'],
})
export class AddnoteComponent implements OnInit {
  constructor(private httpPostAddNote: FundooService) {}

  ngOnInit(): void {}

  title: any;
  description: any;
  isTrue: boolean = true;

  fieldClick() {
    this.isTrue = !this.isTrue;
  }
}

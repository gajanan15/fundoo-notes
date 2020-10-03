import { FundooService } from './../../services/user_service/fundoo.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-colorpalette',
  templateUrl: './colorpalette.component.html',
  styleUrls: ['./colorpalette.component.scss'],
})
export class ColorpaletteComponent implements OnInit {
  constructor(private httpChnageColor: FundooService) {}

  ngOnInit(): void {}

  @Output() getList = new EventEmitter<any>();

  @Input() note: [];
  isColorShow: boolean = false;
  noteId: any = [];
  setColor;

  fieldClick() {
    this.isColorShow = !this.isColorShow;
  }

  colorArray = [
    { color: '#fff' }, { color: '#f28b82' }, { color: '#fbbc04' }, { color: '#fff475' },
    { color: '#ccff90' }, { color: '#a7ffeb' }, { color: '#cbf0f8' }, { color: '#aecbfa' },
    { color: '#d7aefb' }, { color: '#fdcfe8' }, { color: '#e6c9a8' }, { color: '#e8eaed' },
  ];

  changeBackgroundColor(colorData){
    console.log('HIIII Pick Color',colorData)
    this.setColor=colorData;
    this.noteId = this.note['id'];
    var data={
      color:this.setColor,
      noteIdList: [this.noteId],
    };
    this.httpChnageColor.changeColor(data).subscribe((response)=>{
      console.log("Color Response:  ",response)
      console.log("noteData: ",this.note)
      this.getList.emit();
    },error=>{
      console.log("color Error",error)
    })
  }

}

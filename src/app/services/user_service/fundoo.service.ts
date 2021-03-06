import { HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpService } from './../http_service/http.service';

@Injectable({
  providedIn: 'root',
})
export class FundooService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpService) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Authorization": localStorage.getItem('token'),
    }),
  };

  getUserLoggedIn(data) {
    return this.http.postService(data, `${this.baseUrl}user/login`);
  }

  addNote(data) {
    return this.http.postService(data, this.baseUrl + `notes/addNotes`, true, this.httpOptions
    );
  }

  getAllNotes() {
    return this.http.getService(this.baseUrl + `notes/getNotesList`, true, this.httpOptions);
  }

  addArchiveNote(data){
    return this.http.postService(data,this.baseUrl+`notes/archiveNotes`, true, this.httpOptions);
  }

  getAllArchiveNotes(){
    return this.http.getService(this.baseUrl + `notes/getArchiveNotesList`,true,this.httpOptions);
  }

  addToTrash(data){
    return this.http.postService(data,this.baseUrl+`notes/trashNotes`,true,this.httpOptions)
  }

  getAllTrashNotes(){
    return this.http.getService(this.baseUrl + `notes/getTrashNotesList`, true,this.httpOptions);
  }

  updateNotes(data){
     return this.http.postService(data,this.baseUrl + `notes/updateNotes`, true, this.httpOptions); 
  }

  changeColor(data){
    return this.http.postService(data,this.baseUrl + `notes/changesColorNotes`,true,this.httpOptions);
  }
}

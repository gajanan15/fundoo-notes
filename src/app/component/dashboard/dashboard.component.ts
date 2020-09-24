import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnInit(): void {}

  mobileQuery: MediaQueryList;

  //fillerNav = Array.from({ length: 3 }, (_, i) => "Nav Item","xyz");
  fillerNav:string[] = ['Notes',"Reminders","Edit Labels","Archive","Trash"];
}

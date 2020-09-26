import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  userLogin: boolean = false;

  ngOnInit(): void {
    if (localStorage.getItem('token') === null || localStorage.getItem('token') === undefined) {
      this.router.navigate(['login']);
    }
    else {
      this.router.navigate(['home']);
    }
  }

  mobileQuery: MediaQueryList;

  fillerNav: string[] = [
    'Notes',
    'Reminders',
    'Edit Labels',
    'Archive',
    'Trash',
  ];

  imageClick() {
    this.userLogin = !this.userLogin;
  }
}

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
  email:string;
  firstName:string;
  lastName:string;

  ngOnInit(): void {
    if (localStorage.getItem('token') === null || localStorage.getItem('token') === undefined) {
      this.router.navigate(['login']);
    }
    else {
      this.router.navigate(['home']);
      this.email=localStorage.getItem('userEmail');
      this.firstName=localStorage.getItem('firstName');
      this.lastName=localStorage.getItem('lastName');
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

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}

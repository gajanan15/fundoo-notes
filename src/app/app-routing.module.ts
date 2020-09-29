import { AuthGuard } from './services/auth/auth.guard';
import { TrashComponent } from './component/trash/trash.component';
import { NoteComponent } from './component/note/note.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: DashboardComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'note',
        pathMatch: 'full',
      },
      {
        path: "archive",
        component: ArchiveComponent
      },
     {
       path:"note",
       component:NoteComponent
     },
     {
      path:"trash",
      component:TrashComponent
    }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

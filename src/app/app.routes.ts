import { Routes } from '@angular/router';
import { CourseListComponent } from './courses/course-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
  {
    path: 'courses',
    component: CourseListComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Course } from './course';
import { Star } from '../star/star.component';
import { CourseService } from './courses.services';

@Component({
  imports: [MatTableModule, Star],
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  dataSource = this.courses;
  displayedColumns: string[] = ['imageUrl', 'name', 'price', 'code', 'duration', 'rating', 'releaseDate'];

  constructor(private courseService: CourseService)
  {

  }

  ngOnInit(): void {
    this.courses = this.courseService.retrieveAll();
    this.dataSource = [...this.courses];
  }
}

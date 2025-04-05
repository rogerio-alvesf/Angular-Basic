import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Course } from './course';
import { CourseService } from './courses.services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [
      CommonModule,
      FormsModule,
      RouterLink
    ],
    templateUrl: './course-info.component.html',
})
export class CourseInfoComponent implements OnInit {

    course: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {
      this.course = new Course;
    }
    
    ngOnInit(): void { 
      const id = this.activatedRoute.snapshot.paramMap.get('id')!;
      this.courseService.retrieveById(+id).subscribe({
          next: course => this.course = course,
          error: err => console.log('Error', err)
      });
  }

  save(): void {
      this.courseService.save(this.course).subscribe({
          next: course => console.log('Saved with success', course),
          error: err => console.log('Error', err)
      });
  }
}
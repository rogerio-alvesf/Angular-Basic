import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Course } from './course';
import { CourseService } from './courses.services';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ReplacePipe } from '../shared/pipes/replace.pipe';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Star } from '../shared/components/star/star.component';

@Component({
  imports: [
    RouterLink,
    ReplacePipe,
    CommonModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    HttpClientModule,
    Star
  ],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  dataSource = new MatTableDataSource<Course>(this.courses);
  displayedColumns: string[] = [
    'imageUrl',
    'name',
    'price',
    'code',
    'duration',
    'rating',
    'releaseDate',
    'editWithId',
    'deleteWithId',
  ];

  myControl = new FormControl('');
  filteredOptions: Observable<Course[]> = new Observable();

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.retrieveAll();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: (_courses) => {
        this.courses = _courses;
        this.dataSource.data = this.courses;
      },
      error: (err) => console.error('Error: ', err),
    });
  }

  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log("Delete with sucess");
        this.retrieveAll();
      },
      error: err => console.error("Erro", err)
    });
  }

  private _filter(value: string): Course[] {
    const filterValue = value.toLowerCase();

    this.dataSource.data = this.courses.filter((course) =>
      course.name.toLowerCase().includes(filterValue)
    );

    return this.dataSource.data;
  }
}

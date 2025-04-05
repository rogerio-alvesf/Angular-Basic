import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Course } from './course';
import { Star } from '../star/star.component';
import { CourseService } from './courses.services';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ReplacePipe } from '../pipe/replace.pipe';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  imports: [
    RouterLink,
    ReplacePipe,
    CommonModule,
    MatTableModule,
    Star,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    HttpClientModule
  ],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
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
    'id',
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
      error: (err) => console.log('Error: ', err),
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

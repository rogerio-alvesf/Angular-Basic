import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
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

@Component({
  imports: [
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
  ],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  dataSource = this.courses;
  displayedColumns: string[] = [
    'imageUrl',
    'name',
    'price',
    'code',
    'duration',
    'rating',
    'releaseDate',
  ];

  myControl = new FormControl('');

  filteredOptions: Observable<Course[]> = new Observable();

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.retrieveAll();
    this.dataSource = [...this.courses];

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): Course[] {
    const filterValue = value.toLowerCase();
    return this.courses.filter((course) =>
      course.name.toLowerCase().includes(filterValue)
    );
  }
}

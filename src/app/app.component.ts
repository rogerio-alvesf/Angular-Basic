import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from './courses/courses.services';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavBarComponent,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CourseService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
}

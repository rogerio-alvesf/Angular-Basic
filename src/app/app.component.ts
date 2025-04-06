import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from './courses/courses.services';
import { CoreModule } from './core/core.module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CoreModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CourseService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
}

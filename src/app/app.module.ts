import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { CouseModule } from './courses/course.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes.filter(r => r.path != "courses"), { useHash: true }),
    CouseModule,
    AppComponent
  ],
})
export class AppModule { }
import { NgModule } from "@angular/core";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { RouterModule } from "@angular/router";
import { routes } from "../app.routes";
import { FormsModule } from "@angular/forms";
import { ReplacePipe } from "../pipe/replace.pipe";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes.filter(r => r.path == "courses"), { useHash: true }),
        CourseListComponent,
        CourseInfoComponent,
        ReplacePipe
    ],
})

export class CouseModule{

}
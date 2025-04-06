import { NgModule } from "@angular/core";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { RouterModule } from "@angular/router";
import { routes } from "../app.routes";
import { FormsModule } from "@angular/forms";
import { ReplacePipe } from "../shared/pipes/replace.pipe";
import { BrowserModule } from "@angular/platform-browser";
import { StarModule } from "../shared/components/star/star.module";
import { AppPipeModule } from "../shared/pipes/app-pipe.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes.filter(r => r.path == "courses"), { useHash: true }),
        CourseListComponent,
        CourseInfoComponent,
        AppPipeModule,
        StarModule,
    ],
})

export class CouseModule{

}
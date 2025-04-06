import { NgModule } from '@angular/core';
import { ReplacePipe } from './replace.pipe';

@NgModule({
  imports: [ReplacePipe],
  exports: [ReplacePipe],
})
export class AppPipeModule {}

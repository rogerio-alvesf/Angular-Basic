import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  imports: [NavBarComponent, RouterModule],
  exports: [NavBarComponent],
})
export class CoreModule {}

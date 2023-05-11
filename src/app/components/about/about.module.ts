import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoRootModule } from '../../transloco-root.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule, TranslocoRootModule],
  exports: [AboutComponent],
})
export default class AboutModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoRootModule } from '../../transloco-root.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule, TranslocoRootModule],
  exports: [ContactComponent],
})
export class ContactModule {}

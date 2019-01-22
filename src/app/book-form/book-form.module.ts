import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BookFormRoutingModule } from './book-form-routing.module';
import { BookFormComponent } from './containers/book-form/book-form.component';
import { BookFormService } from './services/book-form.service';
import { FileHelpersModule } from 'ngx-file-helpers';

@NgModule({
  imports: [
    CommonModule,
    BookFormRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileHelpersModule
  ],
  declarations: [BookFormComponent],
  providers: [BookFormService]
})
export class BookFormModule {}

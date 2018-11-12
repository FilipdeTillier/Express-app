import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './containers/main/main.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookComponent } from './components/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { MainService } from './services/main.service';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule,
  ],
  declarations: [MainComponent, AllBooksComponent, BookComponent],
  providers: [ MainService ],
})
export class MainModule { }
